sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'po/app/purchaseorderapp/test/integration/FirstJourney',
		'po/app/purchaseorderapp/test/integration/pages/PurchaseOrderList',
		'po/app/purchaseorderapp/test/integration/pages/PurchaseOrderObjectPage',
		'po/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseOrderList, PurchaseOrderObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('po/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseOrderList: PurchaseOrderList,
					onThePurchaseOrderObjectPage: PurchaseOrderObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);