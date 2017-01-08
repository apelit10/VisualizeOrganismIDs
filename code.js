var reader = new FileReader();
var proidsfirstfile = [];
var proidssecondfile= [];
var GOids = [];
var GOidsData = [];
var edges = [];
	
        function readText(that){

            if(that.files && that.files[0]){
                var reader = new FileReader();
                reader.onload = function (e) {  
                    var output=e.target.result;

                    //process text to show only lines with "@":
					var lines = output.split("\n");
					lines.pop();
					lines.shift();
					var ProidFileY = 85;
					
					proidsfirstfile.push({data: { id: 'FirstFile' }});
					for (index=0; index<lines.length; index++){
						
						line = lines[index];
						console.log(typeof line);
						var linelist = line.split(/; |\t|;/);
						var lineproid = linelist[0];  // edge data{ data: { id: 'lineproidy', source: 'f', target: 'y' } }
						var data = {data: { id: lineproid, parent: 'FirstFile',href:'http://www.uniprot.org/uniprot/'+lineproid,color:'green'}, position: { x: 0, y: ProidFileY }};
						ProidFileY = ProidFileY + 400;
						proidsfirstfile.push(data);//prepare proidsfirstfile data
						//prepare GOids list
						for (index2 = 1; index2<linelist.length; index2++){
							
							console.log(GOids.indexOf(linelist[index2]));
							if(index2 == 1){
								
								GOids.push(linelist[index2]);
							}else{								
								if(GOids.indexOf(linelist[index2]) == -1){
									GOids.push(linelist[index2]);
								}
							}
							var EdgeData = {data:{id: lineproid + linelist[index2], source:lineproid, target:linelist[index2],color:'#32F324' }};
							edges.push(EdgeData);
						}						
					}	
                };//end onload()
                reader.readAsText(that.files[0]);
            }//end if html5 filelist support
        }
		
		function readText2(that){

            if(that.files && that.files[0]){
                var reader = new FileReader();
                reader.onload = function (e) {  
                    var output=e.target.result;

                    //process text to show only lines with "@":
					var lines = output.split("\n");
					lines.pop();
					lines.shift();
					var ProidFileY = 85;
					
					
					var y2 = 45;
					proidsfirstfile.push({data: { id: 'SecondFile' }});
					for (index=0; index<lines.length; index++){
						
						line = lines[index];
						console.log(typeof line);
						var linelist = line.split(/; |\t|;/);
						var lineproid = linelist[0];  // edge data{ data: { id: 'lineproidy', source: 'f', target: 'y' } }
						var data = {data: { id: lineproid, parent: 'SecondFile',href:'http://www.uniprot.org/uniprot/'+lineproid,color:'#90057D' }, position: { x: 3000, y: ProidFileY }};
						ProidFileY = ProidFileY + 400;
						
						proidssecondfile.push(data);//prepared proidssecondfile data
						//prepare GOids list
						for (index2 = 1; index2<linelist.length; index2++){
							
							console.log(GOids.indexOf(linelist[index2]));
							if(index2 == 1){
								
								GOids.push(linelist[index2]);
								
							}else{								
								if(GOids.indexOf(linelist[index2]) == -1){
									GOids.push(linelist[index2]);
								}
							}
							var EdgeData = {data:{id: lineproid + linelist[index2], source:lineproid, target:linelist[index2],color:'#EC9FAE' }};
							edges.push(EdgeData);
						}						
					}	
                };//end onload()
                reader.readAsText(that.files[0]);
            }//end if html5 filelist support
        }


function drawcy(){
	//prepare GOids DATA
		
    var href = "";
	var forLink = GOids[0].split("");
	if (forLink[0] == "G" && forLink[1] == "O"){
		href = "http://www.ebi.ac.uk/QuickGO/GTerm?id=";
	}else if (forLink[0] == "I" && forLink[1] == "P"){
		href = "http://www.ebi.ac.uk/interpro/entry/";
	}else if (forLink[0] == "P" && forLink[1] == "F"){
		href = "http://pfam.xfam.org/family/";
	}
	
	var corx = 275;
	var y2 = 45;
	for(i=0; i<GOids.length; i++){
		if (i%100 == 0){
			corx += 150;
			y2 = 45;
		}
		
		var GOdata = {data: { id: GOids[i],href:href+GOids[i],color:'#49F2DB'}, position: { x: corx, y: y2 }};
						
							
		y2 += 30;
		GOidsData.push(GOdata);						
	}
	var proIDs = proidsfirstfile.concat(proidssecondfile);
	var maindata = GOidsData.concat(proIDs);
	
	/*var asda = [
			{data: { id: GOids[i],href:href+GOids[i],color:'#49F2DB'}, position: { x: corx, y: y2 }},
			{data: { id: GOids[i],href:href+GOids[i],color:'#49F2DB'}, position: { x: corx, y: y2 }},
		];*/
	
	localStorage.setItem('Nodes', JSON.stringify(maindata));
	localStorage.setItem('Edges',JSON.stringify(edges));
	window.open( "Result.html" );
	
	proidsfirstfile = [];
	proidssecondfile= [];
	GOids = [];
	GOidsData = [];
	edges = [];
	
}	
			

