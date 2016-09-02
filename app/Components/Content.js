var React = require('react');
let Draggable = require('react-draggable');
let DraggableCore = Draggable.DraggableCore;

module.exports = React.createClass({
  displayName: 'Content',

  getInitialState: function() {
  	return { serverData: null };
  },

  refreshData: function() {
  	// replace this with your favourite library for doing ajax calls
  	var xhr = new XMLHttpRequest();
    xhr.open('get', '/api/currentTime', true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      this.setState({ serverData: data.time });
    };
    xhr.send();
  },

  render: function () {
    return (
      <div id="container">
  			<div id="field">
          <Draggable bounds="parent">
            <div id="gk" className="draggable">
    				  <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">GK</div>
    				  </div>
              <div id="name">D.De Gea</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
            <div id="dl" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">DL</div>
              </div>
              <div id="name">L.Shaw</div>
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div id="dr" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">DR</div>
              </div>
              <div id="name">A.Valencia</div>
            </div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="dcl" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">DCL</div>
              </div>
              <div id="name">D.Blind</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="dcr" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">DCR</div>
              </div>
              <div id="name">E.Bailly</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="fc" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">FC</div>
              </div>
              <div id="name">Z.Ibrahimovic</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="amc" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">AMC</div>
              </div>
              <div id="name">W.Rooney</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="amr" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">AMR</div>
              </div>
              <div id="name">H.Mkhitaryan</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="aml" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">AML</div>
              </div>
              <div id="name">A.Martial</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="cml" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">CML</div>
              </div>
              <div id="name">P.Pogba</div>
    				</div>
          </Draggable>
          <Draggable bounds="parent">
    				<div id="cmr" className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">CML</div>
              </div>
              <div id="name">M.Fellaini</div>
    				</div>
          </Draggable>
  			</div>
  		</div>
	);
  }

});
