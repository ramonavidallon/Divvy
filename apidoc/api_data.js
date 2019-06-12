define({ "api": [
  {
    "type": "get",
    "url": "/bills/",
    "title": "Get all bills as array",
    "name": "GetAllBills",
    "group": "Bill",
    "success": {
      "examples": [
        {
          "title": "Success-Response -> return array of all bills:",
          "content": "    HTTP/1.1 200 OK\n    [\n    {\n        \"id\": 1,\n        \"title\": \"water\",\n        \"Company\": \"PSE\",\n        \"Amount\": \"301\",\n        \"BillDue\": \"2019-06-11T04:11:06.000Z\",\n        \"BillPaid\": false,\n        \"createdAt\": \"2019-06-11T04:11:06.000Z\",\n        \"updatedAt\": \"2019-06-11T04:11:06.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiRoutes.js",
    "groupTitle": "Bill"
  },
  {
    "type": "delete",
    "url": "/bills/delete/:billId",
    "title": "Delete bill with bill id",
    "name": "billDelete",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "billId",
            "description": "<p>Bills unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response -> returns number of bills deleted (returns 0 if no bills deleted):",
          "content": "HTTP/1.1 200 OK\n    1",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiRoutes.js",
    "groupTitle": "Bill"
  },
  {
    "type": "get",
    "url": "/bills/:billId",
    "title": "Get all users for bill id",
    "name": "getUsersForBill",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "billId",
            "description": "<p>Bills unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response -> returns array of users for the bill id:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"firstName\": \"Bobby\",\n      \"lastName\": \"Jones\",\n      \"email\": \"Bobby@email.com\",\n      \"phoneNumber\": \"206999999\",\n      \"createdAt\": \"2019-06-11T04:11:06.000Z\",\n      \"updatedAt\": \"2019-06-11T04:11:06.000Z\",\n      \"UserBill\": {\n          \"percentOwed\": 67,\n          \"createdAt\": \"2019-06-11T04:13:57.000Z\",\n          \"updatedAt\": \"2019-06-11T04:13:57.000Z\",\n          \"BillId\": 1,\n          \"UserId\": 1\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiRoutes.js",
    "groupTitle": "Bill"
  },
  {
    "type": "post",
    "url": "/bills/",
    "title": "Create new bill",
    "name": "postNewBill",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of bill</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Company",
            "description": "<p>Company name for bill</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Amount",
            "description": "<p>Bill amount as number</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "BillDue",
            "description": "<p>Bill due date must be Date object</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "BillPaid",
            "description": "<p>Bill has been fully paid</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "New bill object example usage:",
        "content": "  {\n title: \"water\",\n Company: \"PSE\",\n Amount: 300.5,\n BillDue: Date.now(),\n BillPaid: false,\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response -> Returns newly created bill object",
          "content": "{\n \"id\": 5,\n \"title\": \"water\",\n \"Company\": \"PSE\",\n \"Amount\": 300.5,\n \"BillDue\": \"2019-06-11T04:13:57.000Z\",\n \"BillPaid\": false,\n \"updatedAt\": \"2019-06-12T17:22:09.454Z\",\n \"createdAt\": \"2019-06-12T17:22:09.454Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n    \"name\": \"SequelizeDatabaseError\",\n    \"parent\": {\n        \"code\": \"ER_TRUNCATED_WRONG_VALUE\",\n        \"errno\": 1292,\n        \"sqlState\": \"22007\",\n        \"sqlMessage\": \"Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1\",\n        \"sql\": \"UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?\"\n    },\n    \"original\": {\n        \"code\": \"ER_TRUNCATED_WRONG_VALUE\",\n        \"errno\": 1292,\n        \"sqlState\": \"22007\",\n        \"sqlMessage\": \"Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1\",\n        \"sql\": \"UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?\"\n    },\n    \"sql\": \"UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiRoutes.js",
    "groupTitle": "Bill"
  },
  {
    "type": "put",
    "url": "/bills/update",
    "title": "Update existing bill",
    "name": "update",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of bill</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of bill</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Company",
            "description": "<p>Company name for bill</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Amount",
            "description": "<p>Bill amount as number</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "BillDue",
            "description": "<p>Bill due date must be Date object</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "BillPaid",
            "description": "<p>Bill has been fully paid</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update bill object example usage:",
        "content": "  {\n  id: 1\n title: \"water\",\n Company: \"PSE\",\n Amount: 300.5,\n BillDue: Date.now(),\n BillPaid: false,\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response -> Returns number of bills updated as array",
          "content": "[\n 1\n]",
          "type": "json"
        },
        {
          "title": "Success-Response -> Bill does not exist so no bills updated",
          "content": "[\n  0\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"name\": \"SequelizeDatabaseError\",\n    \"parent\": {\n        \"code\": \"ER_TRUNCATED_WRONG_VALUE\",\n        \"errno\": 1292,\n        \"sqlState\": \"22007\",\n        \"sqlMessage\": \"Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1\",\n        \"sql\": \"INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);\"\n    },\n    \"original\": {\n        \"code\": \"ER_TRUNCATED_WRONG_VALUE\",\n        \"errno\": 1292,\n        \"sqlState\": \"22007\",\n        \"sqlMessage\": \"Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1\",\n        \"sql\": \"INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);\"\n    },\n    \"sql\": \"INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apiRoutes.js",
    "groupTitle": "Bill"
  }
] });
