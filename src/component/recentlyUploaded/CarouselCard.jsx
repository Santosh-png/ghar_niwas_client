import React from 'react';
const Card = React.memo(function (props) {
      const { data, dataIndex } = props;
      const { imageUrl } = data[dataIndex];
      console.log("Check data data: ",data);
      return (
        <div
          style={{
            width: "100%",
            height: 300,
            userSelect: "none",
          }}
          className="my-slide-component"
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: 0,
            }}
            draggable={false}
            src={imageUrl}
          />
        </div>
      );
    });

    export default Card;