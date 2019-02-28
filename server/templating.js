import nunjucks from 'nunjucks';
// react rely on
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import Layout from '../src/layout';

function createEnv(path, opts) {
    let autoescape = opts.autoescape === undefined ? true : opts.autoescape;
    let noCache = opts.noCache || false;
    let watch = opts.watch || false;
    let throwOnUndefined = opts.throwOnUndefined || false;
    let env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(path, {
            noCache: noCache,
            watch: watch,
        }), {
            autoescape: autoescape,
            throwOnUndefined: throwOnUndefined
        });
    if (opts.filters) {
        for (let filter in opts.filters) {
            env.addFilter(filter, opts.filters[filter]);
        }
    }
    return env;
}

function template(path, opts) {
    let ENV = createEnv(path, opts);
    return async (ctx, next) => {
        const context = {};
        const reactDom = renderToString(
            <StaticRouter location={ctx.request.url} context={context}>
                <Layout />
            </StaticRouter>
        );
        ctx.render = function (view, model) {
            try {
                ctx.response.body = ENV.render(view, Object.assign({ layout: reactDom }, ctx.state || {}, model || {}));
            } catch (err) {
                console.log(err);
                ctx.response.body = ENV.render(view, {meta: err});
            }
            ctx.response.type = 'text/html';
        };
        await next();
    };
}

export default template;
