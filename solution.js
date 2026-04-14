// Author: Tsamo Tchinda Rooswell

//Declarations des etudiants
 // remplacons var par const cas les objets ne sont pas reassignes
 const student1 = {
    name: 'Marie', age: 22, city: 'yaounde', skills: ['HTML','CSS']
 };
 const student2 = {
    name: 'Paul', age: 25, city: 'Douala', skills: ['Python','SQL']
 }

 //utilisation de la destructuration sur la fonction getcity pour acceder directement a celle initiale city
 const getCity = ({ city }) => city;
 // fonction build profile
 // destructuration pour extraire le nom et l'age et spread operator pour fusionner les tableaux
 //template string pour construire la chaine proprement
 const buildprofile = (student, extraSkills) => {
    const {name, age } = student;
    const allSkills = [...student.skills, ...extraSkills];

    //template string
    return `${name} (${age}) de ${getCity(student)} | comp: ${allSkills.join(', ')}`;
 };
 // pour fusionner les noms on va utiliser la fonction fleche = template string
 const mergeStudents = (s1, s2) => ({
    name: `${s1.name} & ${s2.name}`,
    city: 'cameroun'
 });
 
 //l'operateur REST pour accepter plusieurs etudiants  et map permet de recuperer uniquements les noms
 const collectNames = (... students) => students.map(student => student.name);

 console.log(buildprofile(student1,['Javascript', 'React']));

 console.log(mergeStudents(student1, student2));

 console.log(collectNames(student1, student2));
