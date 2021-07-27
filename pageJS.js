function roomChange() {

    //variable set for element ids
    var roomSelect = document.getElementById('rooms')
    var roomHeader = document.getElementById('roomHeader')

    var roomList1 = document.getElementById('roomList1')
    var roomList2 = document.getElementById('roomList2')

    //Case switch selection depending on room selected in dropdown
    switch (roomSelect.value) {
        case "room1":
            console.log("Room 1 selected")
            roomHeader.innerHTML = "Quads + Group Study Rooms"
            roomList1.innerHTML = "Quads (Capacity 4)"
            roomList2.innerHTML = "Group Study Rooms (Capaicity 6- 8)"
            break;
        case "room2":
            console.log("Room 2 selected")
            roomHeader.innerHTML = "Conference Rooms + Group Study Rooms"
            roomList1.innerHTML = "Conference Rooms(Capacity 8 - 12)"
            roomList2.innerHTML = "Group Study Rooms (Capaicity 6- 8)"
            break;
        case "room3":
            console.log("Room 3 selected")
            roomHeader.innerHTML = "Conference Rooms"
            roomList1.innerHTML = "Conference Room (Capacity 8 - 12)"
            roomList2.innerHTML = "Group Study Rooms (Capaicity 6- 8)"
            break;
        case "room4":
            console.log("Room 4 selected")
            roomHeader.innerHTML = "Conference Rooms + Quads"
            roomList1.innerHTML = "Quads (Capacity 4)"
            roomList2.innerHTML = "Conference Room (Capaicity 8 - 12)"
            break;
        case "room5":
            console.log("Room 5 selected")
            roomHeader.innerHTML = "Community Room + Conference Room"
            roomList1.innerHTML = "Community room (Capacity 10 - 15)"
            roomList2.innerHTML = "Conference Room (Capacity 8 - 12)"
            break;
        case "room6":
            console.log("Room 6 selected")
            roomHeader.innerHTML = "Audio + Video Rooms"
            roomList1.innerHTML = "Audio + Video Rooms (Capacity 1 - 3)"
            roomList2.innerHTML = "Group Study Rooms (Capaicity 6- 8)"
            break;
        default:
            roomHeader.innerHTML = "No Room selected?"

    }


}