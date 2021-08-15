import React from 'react';
var QRCode = require('qrcode.react');

function QR({value}) {
    return (
        <React.Fragment>
            
            <QRCode value={value}/>
            
        </React.Fragment>
    )
}

export default QR
