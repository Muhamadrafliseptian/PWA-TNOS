import React from "react";

function ContentTitleValue({ title, value, type }) {
  const renderContent = () => {
    switch (type) {
      case "order":
        return (
          <div className="info-s">
            <div className="title">{title}</div>
            <div className="value order">{value}</div>
          </div>
        );
      case "cart":
        return (
          <div className="info-s">
            <div className="title">{title}</div>
            <div className="value cart">{value}</div>
          </div>
        );
      case "waiting":
        return (
          <div className="info-s">
            <div className="title">{title}</div>
            <div className="value waiting">{value}</div>
          </div>
        );
      case "cancel":
        return (
          <div className="info-s">
            <div className="title">{title}</div>
            <div className="value cancel">{value}</div>
          </div>
        );
      case "success":
        return (
          <div className="info-s">
            <div className="title">{title}</div>
            <div className="value success">{value}</div>
          </div>
        );
      case "title":
        return (
          <div className="info-s">
            <div className="title skc">{title}</div>
            <div className="value skc">{value}</div>
          </div>
        );
      default:
        return (
          <div className="info-s">
            <div className="title">{title}</div>
            <div className="value">{value}</div>
          </div>
        );
    }
  };
  return renderContent();
}

export default ContentTitleValue;
