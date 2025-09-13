function validateSignup() {
  const pw = document.getElementById('password').value;
  const conf = document.getElementById('confirm').value;
  if (pw !== conf) { alert("Passwords don't match."); return false; }
  if (pw.length < 6) { alert("Password should be at least 6 characters."); return false; }
  return true;
}
