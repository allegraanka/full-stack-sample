tp = window.tp || [];
tp.push(["init", function() {
    tp.pianoId.init({
        displayMode: 'modal',
        screen: "login",
        loggedIn: function(data) {
            console.log('user ', data.user, ' logged in with token', data.token);
        },
        loggedOut: function() {
            console.log('user logged out');
        }
    });
}]);

var loginBtn = document.getElementById("loginBtn");
var logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click", showPianoLogin);
logoutBtn.addEventListener("click", logout);

// Piano ID functions
// Piano ID login - login button
function showPianoLogin() {
    tp.pianoId.show();
}
// Piano ID logout - logout button
function logout() {
    tp.pianoId.logout();
}