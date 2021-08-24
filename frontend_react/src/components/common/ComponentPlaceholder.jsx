import React from "react";
import ContentLoader from "react-content-loader";
const random = Math.random() * (1 - 0.7) + 0.7;

const ComponentPlaceholder = (props) => {
  let { type } = props;
  if (type === "hotelRoom") {
    return (
      <React.Fragment>
        <h6 className="mb-xs-16">Fetching Room Information...</h6>
        <div className={"ContentLoader " + type}>
          <ContentLoader height={160} width={500} speed={1} backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
            <rect className="w-100" x="185" y="5" rx="4" ry="4" width="1920" height="5.57" />
            <rect className="w-100" x="185" y="30" rx="3" ry="3" width="1920" height="5.7" />
            <rect className="w-100" x="185" y="55" rx="3" ry="3" width="1920" height="6.4" />
            <rect className="w-100" x="185" y="80" rx="3" ry="3" width="1920" height="6.4" />
            <rect className="w-100" x="185" y="105" rx="3" ry="3" width="1920" height="6.4" />
            <rect x="6.69" y="3.67" rx="0" ry="140" width="160" height="160" />
            <rect x="185" y="130" rx="0" ry="0" width="240" height="24" />
          </ContentLoader>
        </div>
      </React.Fragment>
    );
  } else if (type === "staticPage") {
    return (
      <React.Fragment>
        <div className={"ContentLoader mb-xs-32 " + type}>
          <ContentLoader height={160} width={400} speed={1} backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
            <rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
            <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
            <rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
            <rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
            <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
            <rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
          </ContentLoader>
        </div>
      </React.Fragment>
    );
  } else if (type === "HomePageOffer") {
    return (
      <React.Fragment>
        <div className={"ContentLoader " + type}>
          <ContentLoader height={536} width={511} speed={2} backgroundColor="#bbddff" foregroundColor="#ecebeb">
            <rect x="148" y="210" rx="0" ry="0" width="0" height="0" />
            <rect x="267" y="298" rx="0" ry="0" width="1" height="2" />
            <rect x="148" y="153" rx="0" ry="0" width="0" height="0" />
            <rect x="11" y="6" rx="0" ry="0" width="237" height="256" />
            <rect x="266" y="8" rx="0" ry="0" width="237" height="256" />
            <rect x="11" y="273" rx="0" ry="0" width="237" height="256" />
            <rect x="266" y="275" rx="0" ry="0" width="237" height="256" />
          </ContentLoader>
        </div>
      </React.Fragment>
    );
  } else if (type === "newFlight") {
    return (
      <div className={"ContentLoader " + type}
      style={{
        backgroundColor: "#ffffff",
        // height: "10vh"
      }}
      >
       
        <ContentLoader speed={2} width={945} height={238} viewBox="0 0 945 238" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
        <rect x="71" y="69" rx="3" ry="3" width="208" height="8" /> 
        <rect x="71" y="90" rx="3" ry="3" width="193" height="8" /> 
        <rect x="71" y="109" rx="3" ry="3" width="90" height="8" /> 
        <circle cx="38" cy="94" r="26" /> 
        <rect x="73" y="139" rx="3" ry="3" width="208" height="8" /> 
        <rect x="73" y="159" rx="3" ry="3" width="193" height="8" /> 
        <rect x="73" y="180" rx="3" ry="3" width="90" height="8" /> 
        <circle cx="40" cy="163" r="26" /> 
        
        <rect x="362" y="69" rx="3" ry="3" width="208" height="8" /> 
        <rect x="362" y="90" rx="3" ry="3" width="193" height="8" /> 
        <rect x="362" y="109" rx="3" ry="3" width="90" height="8" /> 
        <circle cx="330" cy="94" r="26" /> 
        <rect x="365" y="139" rx="3" ry="3" width="208" height="8" /> 
        <rect x="365" y="159" rx="3" ry="3" width="193" height="8" /> 
        <rect x="365" y="180" rx="3" ry="3" width="90" height="8" /> 
        <circle cx="331" cy="163" r="26" /> 

        <rect x="699" y="5" rx="0" ry="0" width="3" height="333" /> 
        <rect x="803" y="75" rx="3" ry="3" width="90" height="8" /> 
        <rect x="719" y="98" rx="3" ry="3" width="176" height="8" /> 
        <rect x="803" y="122" rx="3" ry="3" width="90" height="8" /> 
        <rect x="719" y="145" rx="3" ry="3" width="176" height="8" />
        </ContentLoader>
      </div>
    );
  } else if(type==="cardSlider") {
    return (
      <ContentLoader viewBox="0 0 400 600" height={600} width={400} {...props}>
        <rect x="20" y="8" rx="0" ry="0" width="100" height="100" />
        <rect x="170" y="8" rx="0" ry="0" width="300" height="15" />
        <rect x="170" y="30" rx="0" ry="0" width="300" height="15" />
        <rect x="170" y="52" rx="0" ry="0" width="100" height="15" />
      </ContentLoader>
    );
  } else if(type==="promotions") {
    return (
      <ContentLoader 
        speed={2}
        width={1300}
        height={500}
        viewBox="0 0 1300 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        >
        <rect x="20" y="23" rx="3" ry="3" width="67" height="18" /> 
        <rect x="185" y="24" rx="3" ry="3" width="67" height="18" /> 
        <rect x="23" y="62" rx="0" ry="0" width="167" height="182" /> 
        <rect x="267" y="24" rx="3" ry="3" width="67" height="18" /> 
        <rect x="349" y="26" rx="3" ry="3" width="67" height="18" /> 
        <rect x="212" y="87" rx="3" ry="3" width="397" height="13" /> 
        <rect x="214" y="123" rx="3" ry="3" width="141" height="11" /> 
        <rect x="386" y="124" rx="3" ry="3" width="141" height="11" /> 
        <rect x="216" y="153" rx="3" ry="3" width="141" height="11" /> 
        <rect x="388" y="154" rx="3" ry="3" width="141" height="11" /> 
        <rect x="21" y="271" rx="0" ry="0" width="167" height="182" /> 
        <rect x="208" y="296" rx="3" ry="3" width="397" height="13" /> 
        <rect x="210" y="332" rx="3" ry="3" width="141" height="11" /> 
        <rect x="382" y="333" rx="3" ry="3" width="141" height="11" /> 
        <rect x="212" y="362" rx="3" ry="3" width="141" height="11" /> 
        <rect x="384" y="363" rx="3" ry="3" width="141" height="11" /> 
        <rect x="732" y="64" rx="0" ry="0" width="167" height="182" /> 
        <rect x="921" y="89" rx="3" ry="3" width="397" height="13" /> 
        <rect x="923" y="125" rx="3" ry="3" width="141" height="11" /> 
        <rect x="1095" y="126" rx="3" ry="3" width="141" height="11" /> 
        <rect x="925" y="155" rx="3" ry="3" width="141" height="11" /> 
        <rect x="1097" y="156" rx="3" ry="3" width="141" height="11" /> 
        <rect x="730" y="273" rx="0" ry="0" width="167" height="182" /> 
        <rect x="917" y="298" rx="3" ry="3" width="397" height="13" /> 
        <rect x="919" y="334" rx="3" ry="3" width="141" height="11" /> 
        <rect x="1091" y="335" rx="3" ry="3" width="141" height="11" /> 
        <rect x="921" y="364" rx="3" ry="3" width="141" height="11" /> 
        <rect x="1093" y="365" rx="3" ry="3" width="141" height="11" /> 
        <rect x="103" y="23" rx="3" ry="3" width="67" height="18" />
      </ContentLoader>
    )
  } else if(type==="promotionDetails") {
    return (
      <ContentLoader 
        speed={2}
        width={1300}
        height={600}
        viewBox="0 0 1300 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        >
        <rect x="7" y="66" rx="3" ry="3" width="1242" height="228" /> 
        <rect x="6" y="15" rx="0" ry="0" width="349" height="28" /> 
        <rect x="7" y="305" rx="0" ry="0" width="349" height="28" /> 
        <rect x="8" y="347" rx="3" ry="3" width="1242" height="155" />
      </ContentLoader>
    )
  } else if(type==="packageDeals") {
    const list = [];

    const width = 1330,
    heading = { width: 140, height: 24 },
    row = 1,
    column = 4,
    padding = 30,
    borderRadius = 8;

    let height;
  
    for (let i = 1; i <= row; i++) {
      for (let j = 0; j < column; j++) {
        const itemWidth = (width - padding * (column + 1)) / column
        const x = j * (itemWidth + padding)
        const height1 = 220
        const height2 = 20
        const height3 = 20
        const space = padding + height1 + (padding / 2 + height2) + height3 + padding * 4
        const y1 =  space * (i - 1)
        const y2 = y1 + padding + height1
        const y3 = y2 + padding / 2 + height2
  
        list.push(
          <React.Fragment key={j}>
            <rect x={x} y={y1} rx={borderRadius} ry={borderRadius} width={itemWidth} height={height1} />
            <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
            <rect x={x} y={y3} rx={0} ry={0} width={itemWidth * 0.6} height={height3} />
          </React.Fragment>
        )
  
        if (i === row) {
          height = y3 + height3
        }
      }
    }
  
    return (
      <ContentLoader viewBox={`0 0 ${width} ${height}`}  width={width} height={height} {...props} >
        {list}
      </ContentLoader>
    )
  } else {
    return (
      <div className={"ContentLoader "}>
        <ContentLoader height={160} width={397} speed={1} backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
          <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
          <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
          <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
          <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
          <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
          <circle cx="30" cy="30" r="30" />
        </ContentLoader>
      </div>
    );
  }
};

export default ComponentPlaceholder;


