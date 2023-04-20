async function restart_ux(){
	await fetch("/riotclient/kill-and-restart-ux", {"method":"POST"});
}

document.addEventListener("keydown", function(event) {
	if (event.ctrlKey && event.key === "r") restart_ux();
});