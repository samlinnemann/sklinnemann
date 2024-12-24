function validation() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;

    // Basic email validation
    if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        alert("Invalid email address!");
        return false;
    }

    // Phone number validation
    if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
        alert("Phone number must be in format 000-000-0000.");
        return false;
    }

    // Prevent script injection
    if (description.includes("<") || description.includes(">")) {
        alert("Invalid characters in description.");
        return false;
    }

    return true;
}
