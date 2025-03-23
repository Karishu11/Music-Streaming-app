const baseUrl = "http://localhost:8080";

// Fetch all songs and display with play buttons
function fetchSongs() {
    const songs = [
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Levitating", artist: "Dua Lipa" },
        { title: "Believer", artist: "Imagine Dragons" }
    ];

    let html = "<h3>Your Songs</h3><ul>";
    songs.forEach(song => {
        html += `
            <li>
                ${song.title} - ${song.artist}
                <button onclick="playSong('${song.title}')">▶️ Play</button>
            </li>`;
    });
    html += "</ul>";
    document.getElementById("songsList").innerHTML = html;
}

// Play selected song by name
function playSong(songName) {
    const audioPlayer = document.getElementById("audioPlayer");

    // Match song names with file
    let songFile = "";
    switch (songName) {
        case "Shape of You":
            songFile = "Shape of You.mp3";
            break;
        case "Levitating":
            songFile = "Levitating.mp3";
            break;
        case "Believer":
            songFile = "Believer.mp3";
            break;
        default:
            alert("Song not found!");
            return;
    }

    // Set audio path correctly
    audioPlayer.src = `audio/${songFile}`;
    audioPlayer.play();

    // Display current playing song
    document.getElementById("nowPlaying").innerText = `🎵 Now Playing: ${songName}`;
}

// Create a new playlist
function createPlaylist() {
    const name = document.getElementById("playlistName").value;
    if (!name) {
        alert("Please enter a playlist name!");
        return;
    }

    alert(`Playlist "${name}" created successfully!`);
    loadPlaylists();
}

// Dummy Playlist for Demo
function loadPlaylists() {
    const playlists = [
        { id: 1, name: "My Favorites" },
        { id: 2, name: "Chill Vibes" }
    ];

    let html = "<h3>Your Playlists</h3><ul>";
    playlists.forEach(playlist => {
        html += `
            <li>
                ${playlist.name}
                <button onclick="deletePlaylist(${playlist.id})">🗑️ Delete</button>
            </li>`;
    });
    html += "</ul>";
    document.getElementById("playlistsList").innerHTML = html;
}

// Delete a playlist (dummy)
function deletePlaylist(id) {
    alert(`Playlist with ID ${id} deleted!`);
    loadPlaylists();
}

// Initial load
fetchSongs();
loadPlaylists();
