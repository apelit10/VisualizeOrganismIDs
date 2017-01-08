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
- [x] Report the all associate nodes between PIds of organisms 


##Usage
  - run<br>
      ``` python uniprot_acc_id_finder.py --refseq 'refseq_id'[ --ensembl 'ensembl_id'[ --uniprot--id 'uniprot_id']] ```
      
  - example command<br>
      ``` python uniprot_acc_id_finder.py --refseq 'NP_000608.1','NP_001139633.1','NP_037305.2' ```<br>
      or <br>
      ``` python uniprot_acc_id_finder.py --ensembl 'ENSMUSG00000029682' --refseq 'NP_001166492.1' --uniprot_id 'HYALP_MACFA' ```
      or <br>
      ``` python uniprot_acc_id_finder.py --refseq 'WP_005082954.1','NP_416893.1','WP_003898649.1' --uniprot_id 'MNTH_BACSU' ```
       or <br>
      ``` python uniprot_acc_id_finder.py --ensembl 'ENSMUSG00000023030' ```
      

##Team Members 

  * [Yavuz Selim Abazaoglu] (https://github.com/Abazaoglu)
  * [Ahmet Pelit] (https://github.com/apelit10)
  * [Gulizar Vural] (https://github.com/nahidErgun)

