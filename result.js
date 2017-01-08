
$(document).ready ( function(){
   var nodes = localStorage.getItem('Nodes');
   var edges = localStorage.getItem('Edges');
   console.log(JSON.parse(nodes));
   console.log(JSON.parse(edges));
   visualize(JSON.parse(nodes),JSON.parse(edges));
   
})

function visualize(nodesdata,edgesdata){ // on dom ready
var cy = cytoscape({

	
  container: document.getElementById('cy'),
  
  boxSelectionEnabled: false,
  autounselectify: true,
  
  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center',
		'background-color': 'data(color)'
		
      }
    },
    {
      selector: '$node > node',
      css: {
		"source-arrow-shape": "rectangle",  
        'padding-top': '5px',
        'padding-left': '5px',
        'padding-bottom': '5px',
        'padding-right': '5px',
        'text-valign': 'top',
        'text-halign': 'center',
        'background-color': '#A0A0A0'
      }
    },
    {
      selector: 'edge',
      css: {
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
		'target-arrow-color': 'green',
		'line-color':'data(color)',
		'opacity':'0.4'
		
      }
    },
    {
      selector: ':selected',
      css: {
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }
    }
  ],
  
  elements: {
    nodes: nodesdata,
	
    edges: edgesdata
  },
  
  layout: {
    name: 'preset',
    padding: 30
  }
});

  cy.on('tap', 'node', function(){
  try { // your browser may block popups
    window.open( this.data('href') );
  } catch(e){ // fall back on url change
    window.location.href = this.data('href'); 
  } 
});



}// on dom ready


