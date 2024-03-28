class Etudiant{
	constructor(cine, nom ,prenom, niveau ){
	 	this.cine = cine
		this.nom = nom
  		this.prenom = prenom
  		this.niveau = niveau
	};
	getCine() {
  		return this.cine
	}
	setCine(value){
  		this.cine = value
	}
  
	getNom() {
  		return this.nom
	}
	setNom(value){
	 	this.nom = value
	}
  
	getPrenom() {
  		return this.prenom
	}
	setPrenom(value){
		this.prenom = value
	}
	getNiveau() {
		return this.niveau
	}
	setNiveau(value){
	  	this.niveau = value
	}
	affichage(){
	  	return "Cine :" + this.getCine() +"\n" +"nome :" + this.getNom() +"\n" +"Prenome :" + this.getPrenom() +"\n" +"age :" + this.getNiveau() +"\n" 
	}
	equal(e){
		if (this.getCine() == e.getCine()){
			return true
	  	}
	  	return false
	}
}
  
class Propraitaire{
	constructor(cine, nom ,prenom, age ){
	  	this.cine = cine
	  	this.nom = nom 
	  	this.prenom = prenom
	  	this.age = age
	};
	getCine() {
	  	return this.cine
	}
	setCine(value){
	  	this.cine = value
	}
  
	getNom() {
	  	return this.nom
	}
	setNom(value){
	  	this.nom = value
	}
  
	getPrenom() {
	  	return this.prenom
	}
	setPrenom(value){
	  	this.prenom = value
	}
	getAge() {
	  	return this.age
	}
	setAge(value){
	  	this.age = value
	}
	affichage(){
	  	return "Cine :" + this.getCine() +"\n" +"nome :" + this.getNom() +"\n" +"Prenome :" + this.getPrenom() +"\n" +"Niveau :" + this.getAge() +"\n" 
	}
	equal(e){
	  	if (this.getCine() == e.getCine()){
			return this.getCine() +" == "+ e.getCine()
	  	}
	  	return false
	}
}
class Maison{
  	constructor(adresse, nbEtages, nbChambres ){
		this.adresse = adresse
	
		this.nbEtages = nbEtages
		this.nbChambres = nbChambres
 	}
  	getadresse() {
		return this.adresse
  	}
  	setadresse(value){
		this.adresse = value
  	}
  	
  	
  	getnbEtages() {
		return this.nbEtages
  	}
  	setnbEtages(value){
		this.nbEtages = value
  	}
  		getNbChambre() {
			return this.nbChambres
  		}
  	setNbChambre(value){
		this.nbChambres = value
  	}
  	affichage(){
		return "adresse :" + this.getadresse() +"\n" +" :" +"nbEtagese :" + this.getnbEtages() +"\n" +"nbrChambres :" + this.getNbChambre() +"\n" 
  	}
  	equal(e){
		if (this.getadresse() == e.getadresse()){
		  return this.getadresse() + " equal " + e.getadresse()
		}
		return false
  	}
}
  
class Produit {
  	constructor(reference, Prix,quantite ){    
		this.reference = reference
		this.Prix = Prix
		this.quantite = quantite
  	};
  	getreference() {
		return this.reference
  	}
  	setreference(value){
		this.reference = value
  	}
  	getPrix() {
		return this.Prix
  	}
  	setPrix(value){
		this.Prix = value
  	}
  	getquantite() {
		return this.quantite
  	}
  	setquantite(value){
		this.quantite = value
  	}

  	affichage(){
		return "reference :" + this.getreference() +"\n"  +"Prixe :" + this.getPrix()+ "\n" + "quantite :" + this.getquantite()  
  	}
  
}
class Medicament extends Produit{
  	constructor(nom, molecule ,reference, Prix,quantite){
		super(reference, Prix,quantite)
		this.nom = nom
		this.molecule = molecule
  	}
  	getnom() {
		return this.nom
  	}
  	setnom(value){
		this.nom = value
  	}
  	getmolecule() {
		return this.molecule
  	}
  	setmolecule(value){
		this.molecule = value
  	}

  	affichage(){
		return  super.affichage() + "\n" + "nom :" + this.getnom() +"\n"  +"moleculee :" + this.getmolecule()  
  	}
  
  }
class paraPharm extends Produit{
  	constructor(type,reference, Prix,quantite ){
		super(reference, Prix,quantite)
		this.type = type

  	};
  	gettype() {
		return this.type
  	}
  	settype(value){
		this.type = value
  	}
  	affichage(){
		return  super.affichage()+ "\n" + "type :" + this.gettype()  
  	}
  
}  
  
  
	  
