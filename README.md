# Webshop_Scrum

## Manifest för vårt arbetssätt ##


1. Punktlig Standup:
Varje arbetsdag inleds med ett standup-möte klockan 09:00. Under detta möte har varje teammedlem möjlighet att dela med sig av sina framsteg, identifierade hinder och sina mål för dagen. Deltagande i mötet är nödvändigt för att säkerställa att alla är medvetna om projektets aktuella status och för att erbjuda hjälp och stöd vid behov.
För att säkerställa att ingen missar viktig information dokumenteras dessa möten också. Alla deltagare kan ta del av anteckningarna i ett gemensamt dokument om de är frånvarande och behöver uppdatera sig på vad som diskuterades under mötet.

2. Kommunikation genom Discord:
Vid frånvaro från standup-mötet förväntas varje medlem meddela sitt frånvaro i vårt Discord-kanal. Kommunikationen genom Discord är snabb och effektiv, vilket underlättar vårt samarbete och möjliggör öppen dialog mellan teammedlemmarna.

3. Flexibla Arbetsdagar:
Arbetsdagen är flexibel och anpassningsbar till individuella behov och arbetsstilar.

## Användning av Arbetsverktyg: ##
Vi använder specifika verktyg för att organisera och följa vårt arbete:

Jira: För att hantera våra projekt, tilldela uppgifter och spåra framsteg.
Länk till Jira: https://ludwigstridh.atlassian.net/ 

Google docs: För att föra anteckningar om våra standup-möten
https://docs.google.com/document/d/1aF7tb3rvJCXOmB9ZQxNlHs9iuPnvd16vB3ZVhbs_hDg/edit

Scrumtavla: För att visualisera och hantera våra Scrum-uppgifter.

Discord: Som vår primära kommunikationsplattform för snabb och direkt samarbete.

Miro: För att skapa och dela databasdiagram och andra visuella hjälpmedel. 
Länk till Miro: https://miro.com/app/board/uXjVNcI60GE=/?share_link_id=927351055439

Google Docs: Dokumentation för standup möten där arbete, problem, osv dokumenteras.
https://docs.google.com/document/d/1aF7tb3rvJCXOmB9ZQxNlHs9iuPnvd16vB3ZVhbs_hDg/edit

## Parprogrammering ## 

Parprogrammering sker 2 och 2. Den ena personen kodar och den andra övervakar för att tillsammans skriva renare och effektivare kod. Det är viktigt att man som par turas om vem som kodar och vem som övervakar, om den ena kodar förmiddagen så kan den andra koda eftermiddagen. Parprogrammering kan underlätta när vi tacklar problem eller userstories som vi inte har så stor erfarenhet utav, då vi kan bolla idéer och tankar med varandra. 

## Teknisk Infrastruktur: ## 
Vi arbetar med följande teknikstack:

***Frontend: Vi utvecklar användargränssnitt med React för en responsiv och användarvänlig upplevelse.***

***Backend: Vår backend byggs med .NET och Swagger för att skapa säkra API:er.***

***CSS: Vi använder .scss för att skapa dynamiska och snygga stilmallar för våra webbapplikationer. För att alla ska använda sig av samma savepath så går man in i File > Preferences > Settings > sök på SASS FORMATS > Edit in settings.json > "savePath": "/src/scss".***

### Pascal Case (C#): ###

Användning: I C# används Pascal Case för att namnge klasser, metoder, egenskaper och andra typer. Det första tecknet och varje efterföljande ord börjar med en stor bokstav utan några separatorer.
Exempel: ManifestForVartArbetssatt är ett exempel på Pascal Case och kan vara namnet på en klass i C#.

### Camel Case (JavaScript): ###

Användning: Det första tecknet börjar med en liten bokstav och varje efterföljande ord börjar med en stor bokstav utan några separatorer.
Exempel: manifestForVartArbetssatt är ett exempel på Camel Case och kan vara namnet på en variabel eller en funktion i JavaScript.

### Kebab Case (HTML och CSS klassnamn): ###

Användning: I HTML och CSS används Kebab Case för att namnge ID:n, klassnamn och i URL:er. Ord separeras med bindestreck (hyphens).


## Branches ##
När vi har en ny user story att jobba med, skapar vi en separat branch från master. Vi ger branchen ett tydligt namn som beskriver vad user storyn handlar om, som till exempel "userstory-login-feature". Det hjälper oss att hålla ordning på vårt arbete och förstå vad varje branch handlar om. Exempelvis: "userstory-logout"

## Merging ##
Innan vi mergar ihop koden från en branch till master, ser vi till att den granskas ordentligt. Två personer i vårt team tittar på koden för att se till att den är bra och fungerar som den ska. De kollar efter fel och ser till att koden följer våra regler och best practise. När de är säkra på att koden är bra, merger vi koden tillsammans in i master. På det här sättet ser vi till att vår kod alltid är bra och fungerar som den ska.
## Mapstruktur i Frontend - React ##
***Screens*** - Denna mapp innehåller alla Huvudsidor som t ex Home och Kategorier. Varje Screen ska ha en egen mapp där js / jsx med tillhörande scss fil.

***components*** - Denna mapp innehåller alla återanvändbara komponenter som Navbar, ProductCard, etc. Varje Komponent ska ha en egen mapp där js / jsx med tillhörande scss fil.

***Scss/corescss/style.scss*** - Här importeras all scss från components / screens 

***Scss/corescss/_colors*** - Innehåller alla färgvariabler som används i hela Hemsidan.

***Scss/corescss/_fonts*** - Fonts som behövs för hemsidan

***Scss/corescss/_Mixin*** - Mediaquerievariabler som behövs om man känner att bootstrap inte är tillräckligt.

## Mapstruktur i Backend ##

***Controllers:*** Denna mapp innehåller våra API-controllers, som hanterar HTTP-förfrågningar och bestämmer vad som ska returneras till klienten.

***Models:*** Inom denna mapp har du två undermappar:

***Models/Entities:*** Här finns våra entitetsklasser som representerar dataobjekt som lagras i din databas. Dessa klasser speglar databasens tabeller Om ändring behövs, diskutera dessa i gruppen först.

***Models/Context:*** Här finnsvår datacontextklass, som kopplar upp applikationen mot databasen. Om ändring behövs, diskutera dessa i gruppen först.

***Models/Repos:*** I denna mapp har vi en MainRepository, som fungerar som en bas för andra repositories. Den innehåller metoder för att utföra vanliga uppgifter som att skapa nya entiteter i databasen.

## Icons ##
https://react-icons.github.io/react-icons


