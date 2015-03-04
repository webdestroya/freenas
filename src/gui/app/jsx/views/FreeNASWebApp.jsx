// Main App Wrapper
// ================
// Top level controller-view for FreeNAS webapp
"use strict";

var React = require("react");

var Router       = require("react-router");
var RouteHandler = Router.RouteHandler;

// WebApp Components
var LoginBox          = require("../components/LoginBox");
var NotificationBar   = require("../components/WebApp/NotificationBar");
var InformationBar    = require("../components/WebApp/InformationBar");
var PrimaryNavigation = require("../components/PrimaryNavigation");


var FreeNASWebApp = React.createClass({

    render: function() {

    return (
      <div className="app-wrapper">
        {/* TODO: Add Modal mount div */}

        {/* Modal window for FreeNAS login - hidden when authenticated */}
        <LoginBox />

        {/* Header containing system status and information */}
        <NotificationBar />

        {/* Primary navigation menu */}
        <PrimaryNavigation />

        {/* Primary view */}
        <RouteHandler />

        {/* User-customizable component showing system events */}
        <InformationBar />

        <footer className="app-footer">
        </footer>
      </div>
    );
  }
});

module.exports = FreeNASWebApp;