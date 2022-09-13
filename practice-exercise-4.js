/*
Practice with loops and functions-->
Expected output:

"
Server 0.Running...
Server 1.Running...
Server 2.Down.Restarting...
Server 2.Running...
Server 3.Running...
"
*/

let servers = [true, true, false, true];

function message(number) {
  console.log("Server " + number + ".Running...");
}

function restart(number) {
  servers[number] = true;
  message(number);
}

for (let i = 0; i < servers.length; i++) {
  if (servers[i]) {
    message(i);
  } else {
    console.log("Server " + i + ", OFFLINE.Restarting...");
    restart(i);
  }
}
