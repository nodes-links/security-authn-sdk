"use strict";
// Auto-generated by AWS Api Gateway, do not modify.
Object.defineProperty(exports, "__esModule", { value: true });
const uritemplate = require("uritemplate");
const util_aws_apigateway_helpers_sdk_libs_1 = require("@nodes-links/util-aws-apigateway-helpers-sdk-libs");
/*
* Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License").
* You may not use this file except in compliance with the License.
* A copy of the License is located at
*
*  http://aws.amazon.com/apache2.0
*
* or in the "license" file accompanying this file. This file is distributed
* on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
* express or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/
exports.apigClientFactory = {};
exports.apigClientFactory.newClient = function (config) {
    const apigClient = {};
    if (config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if (config.accessKey === undefined) {
        config.accessKey = '';
    }
    if (config.secretKey === undefined) {
        config.secretKey = '';
    }
    if (config.apiKey === undefined) {
        config.apiKey = '';
    }
    if (config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if (config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if (config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if (config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }
    // extract endpoint and path from url
    var invokeUrl = 'https://devpublicapi-api.aegis.dev-nodeslinks.com/auth';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);
    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };
    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }
    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };
    var apiGatewayClient = util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    apigClient.accessKeysGet = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var accessKeysGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/access-keys').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(accessKeysGetRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.accessKeysPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var accessKeysPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/access-keys').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(accessKeysPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.accessKeysOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var accessKeysOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/access-keys').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(accessKeysOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.accessKeysIdDelete = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, ['id'], ['body']);
        var accessKeysIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/access-keys/{id}').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, ['id'])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(accessKeysIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.accessKeysIdOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var accessKeysIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/access-keys/{id}').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(accessKeysIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.changePasswordPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var changePasswordPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/change-password').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(changePasswordPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.changePasswordOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var changePasswordOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/change-password').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(changePasswordOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.confirmForgotPasswordPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var confirmForgotPasswordPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/confirm-forgot-password').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(confirmForgotPasswordPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.confirmForgotPasswordOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var confirmForgotPasswordOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/confirm-forgot-password').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(confirmForgotPasswordOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.confirmSignUpPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var confirmSignUpPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/confirm-sign-up').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(confirmSignUpPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.confirmSignUpOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var confirmSignUpOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/confirm-sign-up').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(confirmSignUpOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.forgotPasswordPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var forgotPasswordPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/forgot-password').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(forgotPasswordPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.forgotPasswordOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var forgotPasswordOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/forgot-password').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(forgotPasswordOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.resendConfirmationCodePost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var resendConfirmationCodePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/resend-confirmation-code').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(resendConfirmationCodePostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.resendConfirmationCodeOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var resendConfirmationCodeOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/resend-confirmation-code').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(resendConfirmationCodeOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.signInPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var signInPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/sign-in').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(signInPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.signInOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var signInOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/sign-in').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(signInOptionsRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.signUpPost = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var signUpPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/sign-up').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(signUpPostRequest, authType, additionalParams, config.apiKey);
    };
    apigClient.signUpOptions = function (params, body, additionalParams) {
        if (additionalParams === undefined) {
            additionalParams = {};
        }
        util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        var signUpOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate.parse('/sign-up').expand(util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: util_aws_apigateway_helpers_sdk_libs_1.apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        return apiGatewayClient.makeRequest(signUpOptionsRequest, authType, additionalParams, config.apiKey);
    };
    return apigClient;
};
//# sourceMappingURL=sdk.js.map