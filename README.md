# VisualizeOrganismIDs
The goal is to visualize/identify Gene Ontology terms or protein domains of degree one, in other words to see go terms/protein domains that exist only in one set of proteins


# Visualize/Identify GO terms or PId

## Project Details

Find/list Gene Ontology (GO) annotations (molecular function, biological process and cellular component) and pathways for given proteins

Database : Uniprot<br>
Tools : Java Script(Cytoscape),Html<br>

##STEPS
- [x] Connect to uniprot.
- [x] Get uniprot Entry ids of proteins which are given with cross-reference(InterPro) from two different organisms
- [x] Use cross-reference(InterPro) in the command line thats JavaScript(document library) 
- [x] Visualize cross-reference(InterPro) or GO terms as a node with source and target edges
- [x] Linked the all nodes with attribute that have own databases
- [x] Used cytoscape.js library with bipartite 
- [x] Report the all associate nodes between PIds of organisms 


##Team Members 

  * [Yavuz Selim Abazaoglu] (https://github.com/Abazaoglu)
  * [Ahmet Pelit] (https://github.com/apelit10)
  * [Gulizar Vural] (https://github.com/nahidErgun)

