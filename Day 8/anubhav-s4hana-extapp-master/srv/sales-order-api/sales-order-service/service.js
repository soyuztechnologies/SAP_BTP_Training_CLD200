"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesOrderService = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderApi_1 = require("./SalesOrderApi");
const SalesOrderBillingPlanApi_1 = require("./SalesOrderBillingPlanApi");
const SalesOrderBillingPlanItemApi_1 = require("./SalesOrderBillingPlanItemApi");
const SalesOrderHeaderPartnerApi_1 = require("./SalesOrderHeaderPartnerApi");
const SalesOrderHeaderPrElementApi_1 = require("./SalesOrderHeaderPrElementApi");
const SalesOrderItemApi_1 = require("./SalesOrderItemApi");
const SalesOrderItemBillingPlanApi_1 = require("./SalesOrderItemBillingPlanApi");
const SalesOrderItemPartnerApi_1 = require("./SalesOrderItemPartnerApi");
const SalesOrderItemPartnerAddressApi_1 = require("./SalesOrderItemPartnerAddressApi");
const SalesOrderItemPrElementApi_1 = require("./SalesOrderItemPrElementApi");
const SalesOrderItemRelatedObjectApi_1 = require("./SalesOrderItemRelatedObjectApi");
const SalesOrderItemTextApi_1 = require("./SalesOrderItemTextApi");
const SalesOrderItmPrecdgProcFlowApi_1 = require("./SalesOrderItmPrecdgProcFlowApi");
const SalesOrderItmSubsqntProcFlowApi_1 = require("./SalesOrderItmSubsqntProcFlowApi");
const SalesOrderPartnerAddressApi_1 = require("./SalesOrderPartnerAddressApi");
const SalesOrderPrecdgProcFlowApi_1 = require("./SalesOrderPrecdgProcFlowApi");
const SalesOrderRelatedObjectApi_1 = require("./SalesOrderRelatedObjectApi");
const SalesOrderScheduleLineApi_1 = require("./SalesOrderScheduleLineApi");
const SalesOrderSubsqntProcFlowApi_1 = require("./SalesOrderSubsqntProcFlowApi");
const SalesOrderTextApi_1 = require("./SalesOrderTextApi");
const SalesOrderValAddedSrvcApi_1 = require("./SalesOrderValAddedSrvcApi");
const SlsOrderItemBillingPlanItemApi_1 = require("./SlsOrderItemBillingPlanItemApi");
const SlsOrdPaymentPlanItemDetailsApi_1 = require("./SlsOrdPaymentPlanItemDetailsApi");
const function_imports_1 = require("./function-imports");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function salesOrderService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new SalesOrderService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.salesOrderService = salesOrderService;
class SalesOrderService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get salesOrderApi() {
        const api = this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi);
        const linkedApis = [
            this.initApi('salesOrderBillingPlanApi', SalesOrderBillingPlanApi_1.SalesOrderBillingPlanApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi),
            this.initApi('salesOrderHeaderPartnerApi', SalesOrderHeaderPartnerApi_1.SalesOrderHeaderPartnerApi),
            this.initApi('slsOrdPaymentPlanItemDetailsApi', SlsOrdPaymentPlanItemDetailsApi_1.SlsOrdPaymentPlanItemDetailsApi),
            this.initApi('salesOrderPrecdgProcFlowApi', SalesOrderPrecdgProcFlowApi_1.SalesOrderPrecdgProcFlowApi),
            this.initApi('salesOrderHeaderPrElementApi', SalesOrderHeaderPrElementApi_1.SalesOrderHeaderPrElementApi),
            this.initApi('salesOrderRelatedObjectApi', SalesOrderRelatedObjectApi_1.SalesOrderRelatedObjectApi),
            this.initApi('salesOrderSubsqntProcFlowApi', SalesOrderSubsqntProcFlowApi_1.SalesOrderSubsqntProcFlowApi),
            this.initApi('salesOrderTextApi', SalesOrderTextApi_1.SalesOrderTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderBillingPlanApi() {
        const api = this.initApi('salesOrderBillingPlanApi', SalesOrderBillingPlanApi_1.SalesOrderBillingPlanApi);
        const linkedApis = [
            this.initApi('salesOrderBillingPlanItemApi', SalesOrderBillingPlanItemApi_1.SalesOrderBillingPlanItemApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderBillingPlanItemApi() {
        const api = this.initApi('salesOrderBillingPlanItemApi', SalesOrderBillingPlanItemApi_1.SalesOrderBillingPlanItemApi);
        const linkedApis = [
            this.initApi('salesOrderBillingPlanApi', SalesOrderBillingPlanApi_1.SalesOrderBillingPlanApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderHeaderPartnerApi() {
        const api = this.initApi('salesOrderHeaderPartnerApi', SalesOrderHeaderPartnerApi_1.SalesOrderHeaderPartnerApi);
        const linkedApis = [
            this.initApi('salesOrderPartnerAddressApi', SalesOrderPartnerAddressApi_1.SalesOrderPartnerAddressApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderHeaderPrElementApi() {
        const api = this.initApi('salesOrderHeaderPrElementApi', SalesOrderHeaderPrElementApi_1.SalesOrderHeaderPrElementApi);
        const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemApi() {
        const api = this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi);
        const linkedApis = [
            this.initApi('salesOrderItemBillingPlanApi', SalesOrderItemBillingPlanApi_1.SalesOrderItemBillingPlanApi),
            this.initApi('salesOrderItemPartnerApi', SalesOrderItemPartnerApi_1.SalesOrderItemPartnerApi),
            this.initApi('salesOrderItmPrecdgProcFlowApi', SalesOrderItmPrecdgProcFlowApi_1.SalesOrderItmPrecdgProcFlowApi),
            this.initApi('salesOrderItemPrElementApi', SalesOrderItemPrElementApi_1.SalesOrderItemPrElementApi),
            this.initApi('salesOrderItemRelatedObjectApi', SalesOrderItemRelatedObjectApi_1.SalesOrderItemRelatedObjectApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderScheduleLineApi', SalesOrderScheduleLineApi_1.SalesOrderScheduleLineApi),
            this.initApi('salesOrderItmSubsqntProcFlowApi', SalesOrderItmSubsqntProcFlowApi_1.SalesOrderItmSubsqntProcFlowApi),
            this.initApi('salesOrderItemTextApi', SalesOrderItemTextApi_1.SalesOrderItemTextApi),
            this.initApi('salesOrderValAddedSrvcApi', SalesOrderValAddedSrvcApi_1.SalesOrderValAddedSrvcApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemBillingPlanApi() {
        const api = this.initApi('salesOrderItemBillingPlanApi', SalesOrderItemBillingPlanApi_1.SalesOrderItemBillingPlanApi);
        const linkedApis = [
            this.initApi('slsOrderItemBillingPlanItemApi', SlsOrderItemBillingPlanItemApi_1.SlsOrderItemBillingPlanItemApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemPartnerApi() {
        const api = this.initApi('salesOrderItemPartnerApi', SalesOrderItemPartnerApi_1.SalesOrderItemPartnerApi);
        const linkedApis = [
            this.initApi('salesOrderItemPartnerAddressApi', SalesOrderItemPartnerAddressApi_1.SalesOrderItemPartnerAddressApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemPartnerAddressApi() {
        const api = this.initApi('salesOrderItemPartnerAddressApi', SalesOrderItemPartnerAddressApi_1.SalesOrderItemPartnerAddressApi);
        const linkedApis = [
            this.initApi('salesOrderItemPartnerApi', SalesOrderItemPartnerApi_1.SalesOrderItemPartnerApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemPrElementApi() {
        const api = this.initApi('salesOrderItemPrElementApi', SalesOrderItemPrElementApi_1.SalesOrderItemPrElementApi);
        const linkedApis = [
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemRelatedObjectApi() {
        const api = this.initApi('salesOrderItemRelatedObjectApi', SalesOrderItemRelatedObjectApi_1.SalesOrderItemRelatedObjectApi);
        const linkedApis = [
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItemTextApi() {
        const api = this.initApi('salesOrderItemTextApi', SalesOrderItemTextApi_1.SalesOrderItemTextApi);
        const linkedApis = [
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItmPrecdgProcFlowApi() {
        const api = this.initApi('salesOrderItmPrecdgProcFlowApi', SalesOrderItmPrecdgProcFlowApi_1.SalesOrderItmPrecdgProcFlowApi);
        const linkedApis = [
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderItmSubsqntProcFlowApi() {
        const api = this.initApi('salesOrderItmSubsqntProcFlowApi', SalesOrderItmSubsqntProcFlowApi_1.SalesOrderItmSubsqntProcFlowApi);
        const linkedApis = [
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderPartnerAddressApi() {
        const api = this.initApi('salesOrderPartnerAddressApi', SalesOrderPartnerAddressApi_1.SalesOrderPartnerAddressApi);
        const linkedApis = [
            this.initApi('salesOrderHeaderPartnerApi', SalesOrderHeaderPartnerApi_1.SalesOrderHeaderPartnerApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderPrecdgProcFlowApi() {
        const api = this.initApi('salesOrderPrecdgProcFlowApi', SalesOrderPrecdgProcFlowApi_1.SalesOrderPrecdgProcFlowApi);
        const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderRelatedObjectApi() {
        const api = this.initApi('salesOrderRelatedObjectApi', SalesOrderRelatedObjectApi_1.SalesOrderRelatedObjectApi);
        const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderScheduleLineApi() {
        return this.initApi('salesOrderScheduleLineApi', SalesOrderScheduleLineApi_1.SalesOrderScheduleLineApi);
    }
    get salesOrderSubsqntProcFlowApi() {
        const api = this.initApi('salesOrderSubsqntProcFlowApi', SalesOrderSubsqntProcFlowApi_1.SalesOrderSubsqntProcFlowApi);
        const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderTextApi() {
        const api = this.initApi('salesOrderTextApi', SalesOrderTextApi_1.SalesOrderTextApi);
        const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesOrderValAddedSrvcApi() {
        return this.initApi('salesOrderValAddedSrvcApi', SalesOrderValAddedSrvcApi_1.SalesOrderValAddedSrvcApi);
    }
    get slsOrderItemBillingPlanItemApi() {
        const api = this.initApi('slsOrderItemBillingPlanItemApi', SlsOrderItemBillingPlanItemApi_1.SlsOrderItemBillingPlanItemApi);
        const linkedApis = [
            this.initApi('salesOrderItemBillingPlanApi', SalesOrderItemBillingPlanApi_1.SalesOrderItemBillingPlanApi),
            this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi),
            this.initApi('salesOrderItemApi', SalesOrderItemApi_1.SalesOrderItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get slsOrdPaymentPlanItemDetailsApi() {
        const api = this.initApi('slsOrdPaymentPlanItemDetailsApi', SlsOrdPaymentPlanItemDetailsApi_1.SlsOrdPaymentPlanItemDetailsApi);
        const linkedApis = [this.initApi('salesOrderApi', SalesOrderApi_1.SalesOrderApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    /**
     * @deprecated Since v2.13.0. Use {@link operations} instead.
     */
    get functionImports() {
        return {
            rejectApprovalRequest: (parameter) => (0, function_imports_1.rejectApprovalRequest)(parameter, this.deSerializers),
            releaseApprovalRequest: (parameter) => (0, function_imports_1.releaseApprovalRequest)(parameter, this.deSerializers)
        };
    }
    /**
     * Get unbound functions and actions.
     */
    get operations() {
        return { ...this.functionImports };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map