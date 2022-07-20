module.exports = [
    [
        'invoice',
        'Invoice_num INT NOT NULL PRIMARY KEY,'
        +' Dispatch_date VARCHAR(20) NOT NULL, '
        +' Order_date VARCHAR(50) NOT NULL '
       
    ],
    [
        'customer',
        'GST_num int NOT NULL  PRIMARY KEY,'
        +' Customer_name VARCHAR(255) NOT NULL,'
        +' Address VARCHAR(255) NOT NULL Unique,'
        +' Mobile VARCHAR(255) NOT NULL,'
        +' City VARCHAR(255) NOT NULL,'
        +' State Varchar(255) NOT NULL,'
        +' Postal_code VARCHAR(255) NOT NULL,'
        +' FOREIGN KEY (Invoice_id) REFERENCES invoice(Invoice_num)'
    ],
    [
        'transport',
        'id int auto_increment primary key,'
        +' Transport_name VARCHAR(255) NOT NULL,'
        +' Mobile VARCHAR(100) NOT NULL,'
        +' Vehicle_num VARCHAR(100) NOT NULL,'
        +' FOREIGN KEY (Invoice_id) REFERENCES invoice(Invoice_num)'
    ],
    [
        'product',
        'Description VARCHAR(255) NOT NULL,'
        +' HSN_code VARCHAR(255) NOT NULL,'
        +' GST_rate VARCHAR(255) NOT NULL,'
        +' NOS_SET VARCHAR(255) NOT NULL,'
        +' Quantity VARCHAR(255) NOT NULL,'
        +' Rate_per_comp VARCHAR(255) NOT NULL,'
        +' Amount VARCHAR(255) NOT NULL,'
        +' FOREIGN KEY (Invoice_id) REFERENCES invoice(Invoice_num)'
    ]
]