// =========================
// Check Server Status
// =========================

async function checkAPI() {

    try {

        const response = await fetch("/");

        if (response.ok) {

            document.getElementById("status").innerHTML =
                "🟢 Server Running Successfully";

        }

    }
    catch {

        document.getElementById("status").innerHTML =
            "🔴 Server Offline";

    }

}


// =========================
// Load Users
// =========================

async function loadUsers() {

    try {

        const response = await fetch("/api/users");

        const users = await response.json();

        let html = "";

        users.forEach(user => {

            html += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;

        });

        const table = document.getElementById("usersTable");

        if (table) {

            table.innerHTML = html;

        }

    }
    catch (error) {

        console.log(error);

    }

}



// =========================
// Add User
// =========================

async function addUser() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;


    if (!name || !email) {

        alert("Please fill all fields");

        return;

    }


    await fetch("/api/users", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            name,

            email

        })

    });


    document.getElementById("name").value = "";

    document.getElementById("email").value = "";


    loadUsers();

}



// =========================
// Auto Load Users
// =========================

window.onload = () => {

    if (document.getElementById("usersTable")) {

        loadUsers();

    }

};