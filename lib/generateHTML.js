function generateHTML(data) {
    const directory = data.companyMembers;
    console.log(directory);

    function createEmployee() {
        directory.forEach((element) => {
            if (element.role == `Manager`) {
                console.log(`Success!`);
                return `
                Success.`
            }
            // if (element.role == `Engineer`) {
            //     return `
            //     <section>
            //     <h2>${element.name}</h2>
            //     <h3>${element.role}</h3>
            //     <p>${element.id}</p>
            //     <p>${element.email}</p>
            //     <p>${element.github}</p>
            //     </section>
            //     `
            // }
            // if (element.role == `Intern`) {
            //     return `
            //     <section>
            //     <h2>${element.name}</h2>
            //     <h3>${element.role}</h3>
            //     <p>${element.id}</p>
            //     <p>${element.email}</p>
            //     <p>${element.school}</p>
            //     </section>
            //     `
            // }
        })
        // return `
        // <section>
        // <h2>${directory[0].name}</h2>
        // <h3>${directory[0].role}</h3>
        // <p>${directory[0].id}</p>
        // <p>${directory[0].email}</p>
        // <p>${directory[0].officeNumber}</p>
        // </section>
        // `
    }
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Company Directory</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <header class="column bg-primary text-center">
                <h1>Company Directory</h1>
            </header>    
        </div>

        <div class="row">
            <main>
                ${createEmployee()}  
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>
    `;
  }

module.exports = generateHTML;

  