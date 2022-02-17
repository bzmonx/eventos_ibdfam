function showProgramation(){
    document.getElementById('programation').classList.toggle('active')
    document.getElementById('buyTickets').classList.remove('activeFlex')
    document.getElementById('allSpeakers').classList.remove('active')

}
function showAllSpeakers(){
    document.getElementById('allSpeakers').classList.toggle('active')
    document.getElementById('buyTickets').classList.remove('activeFlex')
    document.getElementById('programation').classList.remove('active')
    
}
function showBuyTickets(){
    document.getElementById('buyTickets').classList.toggle('activeFlex')
    document.getElementById('programation').classList.remove('active')
    document.getElementById('allSpeakers').classList.remove('active')
    
}
