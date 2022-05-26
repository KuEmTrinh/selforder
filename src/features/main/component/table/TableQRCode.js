import React, { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";
export default function TableQRCode(props) {
  const table = JSON.parse(props.table);
  const tableId = table.id;
  console.log(tableId);
  const [qrLink, setQrLink] = useState("");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    setQrLink("http://localhost:3000/table/" + tableId);
  }, []);
  const QRCode = React.forwardRef((props, ref) => {
    // ...

    return <div ref={ref}>Print this</div>;
  });
  return (
    <div>
      <QRCode value={qrLink} ref={componentRef} />
      <button className="button button-green" onClick={handlePrint}>
        {" "}
        Print Resume{" "}
      </button>
    </div>
  );
}
