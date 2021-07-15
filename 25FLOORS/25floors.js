// DOM variables 

const body = document.querySelector("body");
const game_window = document.getElementById("window");
const window_bg_img = document.getElementById("window-bg-img");
const elevator_lift = document.getElementById("elevator-lift");

const story_text = document.getElementById("story-text");
const story2_text = document.getElementById("story2-text");
const floor_text = document.getElementById("floor-text");
const floor_text_inner = document.getElementById("floor-text-inner");
const objective_text = document.getElementById("objective-text");
const notepad_text = document.getElementById("notepad-div-text");

const status = document.getElementById("status");
const hp_status = document.getElementById("hp-status");
const ammo_status = document.getElementById("ammo-status");
const messages_notes = document.getElementById("messages-notes");
const messages_notes_inner = document.getElementById("messages-notes-inner");

const floor1 = document.getElementById("floor1");
const floor4 = document.getElementById("floor4");
const floor5 = document.getElementById("floor5");

// Sounds

const shaft = document.getElementById("descent");
const gunshot = document.getElementById("gunshot");
const hum = document.getElementById("hum");
const gong = document.getElementById("gong");
const taking = document.getElementById("taking");

const track1 = document.getElementById("track1");
const track2 = document.getElementById("track2");
const track3 = document.getElementById("track3");
const track4 = document.getElementById("track4");
const track5 = document.getElementById("track5");
const track6 = document.getElementById("track6");

const sam1 = document.getElementById("sam1");
const sam2 = document.getElementById("sam2");
const sam3 = document.getElementById("sam3");
const sam4 = document.getElementById("sam4");
const sam5 = document.getElementById("sam5");
const sam6 = document.getElementById("sam6");
const sam7 = document.getElementById("sam7");

// Game variables

let game_mode = 1;
let current_weapon = "mod_ruger_10/22";
let hp = 100;
let ammo = 30;
let floor = 1;
let room = 1;
let clicked_menu_btn = false;
let has_seen_reactor1 = false;
let has_seen_reactor2 = false;
let has_power_source = false;
let took_floor1_ammo = false;

// Storage Slots 

const my_checkpoint = localStorage.getItem("the5thfloor-checkpoint");
const has_seen_reactor1_checkpoint = localStorage.getItem("the5thfloor-reactor1");
const has_seen_reactor2_checkpoint = localStorage.getItem("the5thfloor-reactor2");
const has_power_source_checkpoint = localStorage.getItem("the5thfloor-pwer");
const has_taken_floor1_ammo = localStorage.getItem("the5thfloor-floor1ammo");

// Fill storage slots 

if (has_seen_reactor1_checkpoint === "" || has_seen_reactor1_checkpoint === null || has_seen_reactor1_checkpoint === undefined) {
  localStorage.setItem("the5thfloor-reactor1", "false");
  has_seen_reactor1 = false;
}

else if (has_seen_reactor1_checkpoint === "true") {
  has_seen_reactor1 = true;
}

else {
  // PASS 
}

if (has_seen_reactor2_checkpoint === "" || has_seen_reactor2_checkpoint === null || has_seen_reactor2_checkpoint === undefined) {
  localStorage.setItem("the5thfloor-reactor2", "false");
}

else if (has_seen_reactor2_checkpoint === "true") {
  has_seen_reactor2 = true;
}

else {
  // PASS
}

if (has_power_source_checkpoint === "" || has_power_source_checkpoint === null || has_power_source_checkpoint === undefined) {
  localStorage.setItem("the5thfloor-pwer", "false");
  has_power_source = false;
}

else if (has_power_source_checkpoint === "true") {
  has_power_source = true;
}

else {
  // PASS
}

if (has_taken_floor1_ammo === "" || has_taken_floor1_ammo === null || has_taken_floor1_ammo === undefined) {
  localStorage.setItem("the5thfloor-floor1ammo", "false");
  took_floor1_ammo = false;
}

else if (has_taken_floor1_ammo === "true") {
  took_floor1_ammo = true;
}

else {
  // PASS
}

// Default

$("#story-scene").hide();
$("#story-scene2").hide();
$("#floor-text").hide();
$("#elevator-lift").hide();
$("#floor1").hide();
$("#floor2").hide();
$("#floor3").hide();
$("#floor4").hide();
$("#floor5").hide();
$("#muzzleflash").hide();
$("#crosshair").hide();
$("#status").hide();
$("#icons").hide();
$("#notepad-div").hide();
$("#gun-div").hide();
$("#floor1-monitor").hide();
$("#messages-notes").hide();
$("#floor1-ammo").hide();
$("#floor2-cord").hide();
$("#gun").hide();

// Start Menu 

$("#start-game").click(function () {
  if (clicked_menu_btn === true) {
    return false;
  }

  shaft.cloneNode(true).play();
  $("#window").fadeOut(3000);
  clicked_menu_btn = true;

  setTimeout(function () {
    $("#start-menu").hide();
    $("#window-bg").hide();
    
    $("#window").fadeIn(3000);
    $("#story-scene").fadeIn(3000);

    setTimeout(function () {
      is_ready_for_next_text = true;
    }, 1000);
  }, 3000);
});

$("#checkpoint").click(function () {
  if (my_checkpoint === "" || my_checkpoint === null || my_checkpoint === undefined) {
    return false;
  }

  else {
    if (clicked_menu_btn === true) {
      return false; 
    }

    else {
      shaft.cloneNode(true).play();
      clicked_menu_btn = true;
      $("#window").fadeOut(3000);

      setTimeout(function () {
        $("#start-menu").hide();
        $("#window-bg").hide();
    
        $("#window").fadeIn(3000);

        $("#crosshair").fadeIn(3000);
        $("#status").fadeIn(3000);
        $("#icons").fadeIn(3000);

        if (my_checkpoint === "floor1") {
          $("#floor1").fadeIn(3000);

          track2.play();
          hum.play();
        }

        body.classList.add("noCursor");

        game_mode = 0;
      }, 3000);
    }
  }
});

// Story text scene 

let is_ready_for_next_text = false;
let text_number = 1;

$("#story-text-next").click(function () {
  if (is_ready_for_next_text === true) {
    is_ready_for_next_text = false;

    $("#story-scene").fadeOut(3000);
    text_number = text_number + 1;

    setTimeout(function () {
      if (text_number === 2) {
        $("#story-scene").fadeIn(3000);
        is_ready_for_next_text = true;

        story_text.innerText = "But not anymore.";
      }

      else if (text_number === 3) {
        $("#story-scene").fadeIn(3000);
        is_ready_for_next_text = true;

        story_text.innerText = "Now, split between two factions, we are on the brink of war. We are no longer prosperous or plentiful.";
      }

      else if (text_number === 4) {
        $("#story-scene").fadeIn(3000);
        is_ready_for_next_text = true;

        story_text.innerText = "I fear that we may not exist by tomorrow.";
      }

      else {
        $("#window").fadeOut(3000);

        setTimeout(function () {
          $("#story-scene2").show();

          $("#window").fadeIn(3000);
          track1.play();

          setTimeout(function () {
            cutSceneOne();
          }, 5000);
        }, 3000);
      }
    }, 3000);
  }

  else {
    return false;
  }
});

// Cutscene functions 

function cutSceneOne () {
  $("#story-scene2").fadeOut(3000);

  setTimeout(function () {
    story2_text.innerText = "It was from an older ship, so the distress signal must've taken years to reach the Deposition Patrol forces.";

    $("#story-scene2").fadeIn(3000);

    setTimeout(function () {
      $("#story-scene2").fadeOut(3000);

      setTimeout(function () {
        story2_text.innerText = "We assume that nobody is alive on the craft, but the potential supplies would be useful for the inevitable war with the Coalition.";

        $("#story-scene2").fadeIn(3000);

        setTimeout(function () {
          $("#story-scene2").fadeOut(3000);

          setTimeout(function () {
            story2_text.innerText = "Besides, any ship will be helpful to the war effort- even the ancient ones.";

            $("#story-scene2").fadeIn(3000);

            setTimeout(function () {
              $("#story-scene2").fadeOut(3000);

              setTimeout(function () {
                story2_text.innerText = "What could go wrong?";

                $("#story-scene2").fadeIn(3000);

                setTimeout(function () {
                  $("#window").fadeOut(3000);
                  $("#story-scene2").fadeOut(3000);

                  $("#track1").animate({volume : 0.0}, 3000);

                  setTimeout(function () {
                    track1.pause();

                    $("#floor-text").fadeIn(3000);
                    $("#window").fadeIn(3000);

                    setTimeout(function () {
                      $("#floor-text").fadeOut(3000);
                      $("#window").fadeOut(3000);

                      setTimeout(function () {
                        $("#floor1").fadeIn(3000);
                        $("#window").fadeIn(3000);
                        $("#crosshair").fadeIn(3000);
                        $("#status").fadeIn(3000);
                        $("#icons").fadeIn(3000);

                        track2.play();
                        hum.play();

                        body.classList.add("noCursor");
                        localStorage.setItem("the5thfloor-checkpoint", "floor1");

                        game_mode = 0;
                      }, 3000);
                    }, 8000);
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 10000);
          }, 3000);
        }, 15000);
      }, 3000);
    }, 10000);
  }, 3000);
}

// Select and shoot 

let isOnElevator1 = false;
let isOnElevator2 = false;
let isOnElevator3 = false;
let isOnElevator4 = false;
let isOnElevator5 = false;

let isOnNotepad = false;
let isOnGun = false;

let isOnNotepadBack = false;
let isOnGunBack = false;

let isOnMonitor = false;
let isOnAmmo = false;
let isOnCord = false;

function collision ($div1, $div2) {
  let x1 = $div1.offset().left;
  let y1 = $div1.offset().top;
  let h1 = $div1.outerHeight(true);
  let w1 = $div1.outerWidth(true);
  let b1 = y1 + h1;
  let r1 = x1 + w1;
  let x2 = $div2.offset().left;
  let y2 = $div2.offset().top;
  let h2 = $div2.outerHeight(true);
  let w2 = $div2.outerWidth(true);
  let b2 = y2 + h2;
  let r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
}

setInterval(function () {
  if (collision($("#crosshair"), $("#floor1-elevator-div"))) {
    isOnElevator1 = true;
  }

  else {
    isOnElevator1 = false;
  }

  if (collision($("#crosshair"), $("#notepad"))) {
    isOnNotepad = true;
  }

  else {
    isOnNotepad = false;
  }

  if (collision($("#crosshair"), $("#gun"))) {
    isOnGun = true;
  }

  else {
    isOnGun = false;
  }

  if (collision($("#crosshair"), $("#back-from-notepad"))) {
    isOnNotepadBack = true;
  }

  else {
    isOnNotepadBack = false;
  }

  if (collision($("#crosshair"), $("#floor1-monitor"))) {
    isOnMonitor = true;
  }

  else {
    isOnMonitor = false;
  }

  if (collision($("#crosshair"), $("#floor1-ammo"))) {
    isOnAmmo = true;
  }

  else {
    isOnAmmo = false;
  }

  if (collision($("#crosshair"), $("#floor2-elevator-div"))) {
    isOnElevator2 = true;
  }

  else {
    isOnElevator2 = false;
  }

  if (collision($("#crosshair"), $("#floor2-cord"))) {
    isOnCord = true;
  }

  else {
    isOnCord = false;
  }

  if (collision($("#crosshair"), $("#floor3-elevator-div"))) {
    isOnElevator3 = true;
  }

  else {
    isOnElevator3 = false;
  }

  if (collision($("#crosshair"), $("#floor4-elevator-div"))) {
    isOnElevator4 = true;
  }

  else {
    isOnElevator4 = false;
  }

  if (collision($("#crosshair"), $("#floor5-elevator-div"))) {
    isOnElevator5 = true;
  }

  else {
    isOnElevator5 = false;
  }
}, 100);

$("#back-from-notepad").click(function () {
  $("#notepad-div").hide();
  $("#window").show();

  game_mode = 0;
});

let is_cycling = false;

$(document).mousemove(function (event) {
  $("#muzzleflash").css({
    left : event.clientX - 35,
    top : event.clientY
  });

  $("#crosshair").css({
    left : event.clientX,
    top : event.clientY
  });

  if (isOnElevator1 === true) {
    $("#floor1-elevator-div").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor1-elevator-div").css({
      boxShadow : "none"
    });
  }

  if (isOnNotepad === true) {
    $("#notepad").css({
      backgroundColor : "powderblue"
    });
  }
  
  else {
    $("#notepad").css({
      backgroundColor : ""
    });
  }

  if (isOnGun === true) {
    $("#gun").css({
      backgroundColor : "powderblue"
    });
  }

  else {
    $("#gun").css({
      backgroundColor : ""
    });
  }

  if (isOnNotepadBack === true) {
    $("#back-from-notepad").css({
      backgroundColor : "plum"
    });
  }

  else {
    $("#back-from-notepad").css({
      backgroundColor : "grey"
    });
  }

  if (isOnMonitor === true) {
    $("#floor1-monitor").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor1-monitor").css({
      boxShadow : "none"
    });
  }

  if (isOnAmmo === true) {
    $("#floor1-ammo").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor1-ammo").css({
      boxShadow : "none"
    });
  }

  if (isOnElevator2 === true) {
    $("#floor2-elevator-div").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor2-elevator-div").css({
      boxShadow : "none"
    });
  }

  if (isOnCord === true) {
    $("#floor2-cord").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor2-cord").css({
      boxShadow : "none"
    });
  }

  if (isOnElevator3 === true) {
    $("#floor3-elevator-div").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor3-elevator-div").css({
      boxShadow : "none"
    });
  }

  if (isOnElevator4 === true) {
    $("#floor4-elevator-div").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor4-elevator-div").css({
      boxShadow : "none"
    });
  }

  if (isOnElevator5 === true) {
    $("#floor5-elevator-div").css({
      boxShadow : "5px 10px 18px red"
    });
  }

  else {
    $("#floor5-elevator-div").css({
      boxShadow : "none"
    });
  }
});

function muzzleFlash (type) {
  if (type === "normal") {
    $("#muzzleflash").show();
  }

  setTimeout(function () {
    $("#muzzleflash").hide();
  }, 100);
}

function fireGun (gun) {
  if (is_cycling === true) {
    return false;
  }

  else if (ammo < 1) {
    return false;
  }

  if (gun === "mod_ruger_10/22") {
    gunshot.cloneNode(true).play();
    is_cycling = true;
    muzzleFlash("normal");

    ammo = ammo - 1;
    ammo_status.innerText = "Ammo: " + ammo;

    setTimeout(function () {
      is_cycling = false;
    }, 1000);
  }
}

function checkBackButtons () {
  if (isOnNotepadBack === true) {
    gong.cloneNode(true).play();

    $("#window").show();
    $("#notepad-div").hide();

    hum.play();

    if (floor === 1) {
      track2.play();
    }

    else if (floor === 2) {
      track3.play();
    }

    else if (floor === 3) {
      track4.play();
    }

    else if (floor === 4) {
      track5.play();
    }

    else if (floor === 5) {
      track6.play();
    }

    game_mode = 0;
  }

  else {
    return false;
  }
}

function checkIfSelect () {
  if (isOnElevator1 === true) {
    if (took_floor1_ammo === true) {
      game_mode = 1;

      $("#window").fadeOut(3000);
      $("#track2").animate({volume : 0.0}, 3000);
      $("#hum").animate({volume : 0.0}, 3000);

      setTimeout(function () {
        $("#floor2").fadeIn(3000);
        $("#window").fadeIn(3000);

        $("#floor1").hide();

        track3.play();
        hum.play();

        $("#hum").animate({volume : 1.0}, 3000);

        game_mode = 2;
        floor = 2;
        room = 1;
      }, 3000);
    }

    else {
      messages_notes_inner.innerText = "You can't use the lift until you find supplies.";

      $("#messages-notes").fadeIn(3000);

      setTimeout(function () {
        $("#messages-notes").fadeOut(3000);
      }, 3000);
    }
  }

  else if (isOnNotepad === true) {
    if (game_mode === 0 || game_mode === 2) {
      gong.cloneNode(true).play();
    }

    else {
      return false;
    }

    if (floor === 1) {
      track2.pause();
      hum.pause();

      $("#window").hide();
      $("#notepad-div").show();

      game_mode = 1;
    }

    else if (floor === 2) {
      track3.pause();
      hum.pause();

      $("#window").hide();
      $("#notepad-div").show();

      game_mode = 1;
    }

    else if (floor === 3) {
      track4.pause(); 
      
      $("#window").hide();
      $("#notepad-div").show();

      game_mode = 1;
    }

    else if (floor === 4) {
      track5.pause();

      $("#window").hide();
      $("#notepad-div").show();

      game_mode = 1;
    }

    else if (floor === 5) {
      track6.pause();

      $("#window").hide();
      $("#notepad-div").show();

      game_mode = 1;
    }
  }

  else if (isOnGun === true) {
    gong.cloneNode(true).play();
  }

  else if (isOnMonitor === true) {
    if (has_power_source === true) {
    }

    else {
      messages_notes_inner.innerText = "The monitor needs a power source.";
      $("#messages-notes").fadeIn(3000);

      setTimeout(function () {
        $("#messages-notes").fadeOut(3000);
      }, 3000);
    }
  }

  else if (isOnAmmo === true) {
    ammo = ammo + 30;
    taking.cloneNode(true).play();
    ammo_status.innerText = "Ammo: " + ammo;

    $("#floor1-ammo").hide();
    took_floor1_ammo = true;

    messages_notes_inner.innerText = "Objective Completed. Lift is now working.";
    $("#messages-notes").fadeIn(3000);

    setTimeout(function () {
      $("#messages-notes").fadeOut(3000);
    }, 3000);
  }

  else if (isOnElevator2 === true) {
    game_mode = 1;

    $("#window").fadeOut(3000);
    $("#track3").animate({volume : 0.0}, 3000);
    $("#hum").animate({volume : 0.0}, 3000);

    setTimeout(function () {
      game_mode = 0;

      $("#window").fadeIn(3000);

      track4.play();
      hum.play();

      floor = 3;
      $("#floor2").hide();

      $("#track4").animate({volume : 1.0}, 3000);
      $("#floor3").fadeIn(3000);

      messages_notes_inner.innerText = "It's too dark to go unprotected.";

      setTimeout(function () {
        $("#messages-notes").fadeIn(3000);

        setTimeout(function () {
          $("#messages-notes").fadeOut(3000);

          setTimeout(function () {
            messages_notes_inner.innerText = "Shoot at the dark to make the voices stop.";

            $("#messages-notes").fadeIn(3000);

            setTimeout(function () {
              $("#messages-notes").fadeOut(3000);
            }, 5000);
          }, 3000);
        }, 5000);
      }, 3000);
    }, 3000);
  }

  else if (isOnElevator3 === true) {
    game_mode = 1;

    $("#window").fadeOut(3000);
    $("#track4").animate({volume : 0.0}, 3000);
    $("#hum").animate({volume : 0.0}, 3000);

    setTimeout(function () {
      game_mode = 0;

      $("#window").fadeIn(3000);

      track5.play();
      hum.play();

      floor = 4;
      $("#floor3").hide();

      $("#track5").animate({volume : 1.0}, 3000);
      $("#floor4").fadeIn(3000);
    }, 3000);
  }

  else if (isOnElevator4 === true) {
    game_mode = 1;

    $("#window").fadeOut(3000);
    $("#track5").animate({volume : 0.0}, 3000);
    $("#hum").animate({volume : 0.0}, 3000);

    floor = 5;

    setTimeout(function () {
      game_mode = 0;

      $("#window").fadeIn(3000);

      track6.play();
      hum.play();

      floor = 5;
      $("#floor4").hide();

      $("#track6").animate({volume : 1.0}, 3000);
      $("#floor5").fadeIn(3000);
    }, 3000);
  }

  else if (isOnElevator5 === true) {
    game_mode = 1;

    $("#window").fadeOut(3000);
    $("#track6").animate({volume : 0.0}, 3000);
    $("#hum").animate({volume : 0.0}, 3000);

    floor = 1;

    setTimeout(function () {
      game_mode = 0;

      $("#window").fadeIn(3000);

      track2.play();
      hum.play();

      floor = 1;
      $("#floor5").hide();
      
      $("#hum").animate({volume : 1.0}, 3000);
      $("#track2").animate({volume : 1.0}, 3000);

      $("#floor1").fadeIn(3000);
    }, 3000);
  }

  else {
    if (current_weapon === "mod_ruger_10/22") {
      fireGun("mod_ruger_10/22");
    }
  }
}

const turretInterval = setInterval(function () {
  if (game_mode === 0) {
    if (floor === 2 && room === -1) {
      hp = hp - 10;

      hp_status.innerText = "Health: " + hp + "%";
    }

    else {
      return false;
    }
  }

  else {
    return false;
  }
}, 1000);

setInterval(function () {
  if (floor === 3) {
    if (is_cycling === false) {
      hp = hp - 10;

      sam1.play();
      sam2.play();
      sam3.play();
      sam4.play();
      sam5.play();
      sam6.play();
      sam7.play();

      hp_status.innerText = "Health: " + hp + "%";

      if (hp < 1) {
        game_mode = 1;

        $("#window").fadeOut(3000);
        $("#track4").animate({volume : 0.0}, 3000);
        $("#hum").animate({volume : 0.0}, 3000);

        floor = 1;

        setTimeout(function () {
          game_mode = 0;

          $("#window").fadeIn(3000);

          track2.play();
          hum.play();

          floor = 1;
          $("#floor3").hide();
      
          $("#hum").animate({volume : 1.0}, 3000);
          $("#track2").animate({volume : 1.0}, 3000);

          $("#floor1").fadeIn(3000);
        }, 3000);
      }
    }
  }

  else {
    if (hp < 100) {
      hp = hp + 10;

      hp_status.innerText = "Health: " + hp + "%";
    }
  }
}, 3000);

function getRoom (direction) {
  console.log("moving");

  if (floor === 1) {
    console.log("floor 1");

    if (direction === "left") {
      console.log("left");
      gong.cloneNode(true).play();

      room = room - 1;

      if (room === 2) {
        $("#floor1-monitor").show();

        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom2.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom2.png')";
      }

      else if (room === 1) {
        $("#floor1-monitor").hide();
        $("#floor1-elevator-div").show();

        floor1.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 0) {
        if (took_floor1_ammo === false) {
          $("#floor1-ammo").show();
        }

        $("#floor1-elevator-div").hide();

        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom.png')";
      }

      else if (room === -1) {
        $("#floor1-ammo").hide();

        if (has_seen_reactor1 === true) {
          // PASS
        }

        else {
          game_mode = 1;
          $("#messages-notes").fadeIn(3000);

          setTimeout(function () {
            $("#messages-notes").fadeOut(3000);

            setTimeout(function () {
              messages_notes_inner.innerText = "New notes";

              $("#messages-notes").fadeIn(3000);

              setTimeout(function () {
                $("#messages-notes").fadeOut(3000);
                
                game_mode = 0;
                has_seen_reactor1 = true; 

                localStorage.setItem("the5thfloor-reactor1", "true");
                notepad_text.innerText = notepad_text.innerText + `

A reactor of this kind is very advanced, especially for a scrapper ship.
Where did they get this tech? The only place that had these reactors 
was destroyed long ago, when our people were split between two 
factions.
                `;
              }, 3000);
            }, 3000);
          }, 3000);
        }

        floor1.style.backgroundImage = "url('../25FLOORS/images/reactor.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/reactor.png')";
      }
      
      else {
        room = room + 1;

        return false;
      }
    }

    else if (direction === "right") {
      console.log("right");
      gong.cloneNode(true).play();

      room = room + 1;

      if (room === 0) {
        if (took_floor1_ammo === false) {
          $("#floor1-ammo").show();
        }

        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom.png')";
      }

      else if (room === 1) {
        $("#floor1-ammo").hide();
        $("#floor1-elevator-div").show();

        floor1.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor1-monitor").show();
        $("#floor1-elevator-div").hide();

        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom2.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/controlroom2.png')";
      }

      else if (room === 3) {
        $("#floor1-monitor").hide();

        if (has_seen_reactor2 === true) {
          // PASS
        }

        else {
          game_mode = 1;
          messages_notes_inner.innerText = "Looks like there was supposed to be a reactor here.";
          $("#messages-notes").fadeIn(3000);

          setTimeout(function () {
            $("#messages-notes").fadeOut(3000);

            setTimeout(function () {
              messages_notes_inner.innerText = "New notes";

              $("#messages-notes").fadeIn(3000);

              setTimeout(function () {
                $("#messages-notes").fadeOut(3000);
                
                game_mode = 0;
                has_seen_reactor2 = true; 

                localStorage.setItem("the5thfloor-reactor2", "true");
                notepad_text.innerText = notepad_text.innerText + `

Where did the other reactor go? If one reactor is gone, it must mean that 
a decent part of the ship is malfunctioning. Perhaps the distress signal 
got through so late because of this malfunction- not because of older 
technology. 
                `;
              }, 3000);
            }, 3000);
          }, 3000);
        }

        floor1.style.backgroundImage = "url('../25FLOORS/images/reactor2.png')";
        console.log("changing background...");
        floor1.style.backgroundImage = "url('../25FLOORS/images/reactor2.png')";
      }

      else {
        room = room - 1;

        return false;
      }
    }
  }

  else if (floor === 2) {
    if (direction === "left") {
      gong.cloneNode(true).play();

      room = room - 1;

      if (room === -1) {
        $("#floor2-cord").hide();

        floor2.style.backgroundImage = "url('../25FLOORS/images/infirmary.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/infirmary.png')";
      }

      else if (room === 0) {
        $("#floor2-cord").show();
        $("#floor2-elevator-div").hide();
        
        console.log("test");

        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle.png')";
      }

      else if (room === 1) {
        $("#floor2-cord").hide();
        $("#floor2-elevator-div").show();
        
        console.log("test");

        floor2.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor2-elevator-div").hide();

        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle2.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle2.png')";
      }

      else {
        room = room + 1;

        return false;
      }
    }

    else if (direction === "right") {
      gong.cloneNode(true).play();

      room = room + 1;

      if (room === 0) {
        $("#floor2-cord").show();
        $("#floor2-elevator-div").hide();
        
        console.log("test");

        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle.png')";
      }

      else if (room === 1) {
        $("#floor2-cord").hide();
        $("#floor2-elevator-div").show();
        
        console.log("test");

        floor2.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor2-elevator-div").hide();

        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle2.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle2.png')";
      }

      else if (room === 3) {
        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle3.png')";
        floor2.style.backgroundImage = "url('../25FLOORS/images/shuttle3.png')";
      }

      else {
        room = room - 1;

        return false;
      }
    }
  }

  else if (floor === 3) {
    if (direction === "left") {
      gong.cloneNode(true).play();

      room = room - 1;

      if (room === -1) {
        floor3.style.backgroundImage = "none";
        floor3.style.backgroundColor = "black";
      }

      else if (room === 0) {
        $("#floor3-elevator-div").hide();

        floor3.style.backgroundImage = "none";
        floor3.style.backgroundColor = "black";
      }

      else if (room === 1) {
        $("#floor3-elevator-div").show();
      }

      else if (room === 2) {
        floor3.style.backgroundImage = "none";
        floor3.style.backgroundColor = "black";
      }

      else {
        room = room + 1;

        return false;
      }
    }

    else if (direction === "right") {
      gong.cloneNode(true).play();

      room = room + 1;

      if (room === 0) {
        $("#floor3-elevator-div").hide();

        floor3.style.backgroundImage = "none";
        floor3.style.backgroundColor = "black";
      }

      else if (room === 1) {
        $("#floor3-elevator-div").show();

        floor3.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor3.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor3-elevator-div").hide();

        floor3.style.backgroundImage = "none";
        floor3.style.backgroundColor = "black";
      }

      else if (room === 3) {
        floor3.style.backgroundImage = "none";
        floor3.style.backgroundColor = "black";
      }

      else {
        room = room - 1;

        return false;
      }
    }
  }

  else if (floor === 4) {
    if (direction === "left") {
      gong.cloneNode(true).play();

      room = room - 1;

      if (room === -1) {
        floor4.style.backgroundImage = "url('../25FLOORS/images/sleeping.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/sleeping.png')";
      }

      else if (room === 0) {
        $("#floor4-elevator-div").hide();
        
        console.log("test");

        floor4.style.backgroundImage = "url('../25FLOORS/images/sleeping2.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/sleeping2.png')";
      }

      else if (room === 1) {
        $("#floor4-elevator-div").show();
        
        console.log("test");

        floor4.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor4-elevator-div").hide();

        floor4.style.backgroundImage = "url('../25FLOORS/images/storage1.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/storage1.png')";
      }

      else {
        room = room + 1;

        return false;
      }
    }

    else if (direction === "right") {
      gong.cloneNode(true).play();

      room = room + 1;

      if (room === 0) {
        $("#floor4-elevator-div").hide();
        
        console.log("test");

        floor4.style.backgroundImage = "url('../25FLOORS/images/sleeping2.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/sleeping2.png')";
      }

      else if (room === 1) {
        $("#floor4-elevator-div").show();
        
        console.log("test");

        floor4.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor4-elevator-div").hide();

        floor4.style.backgroundImage = "url('../25FLOORS/images/storage1.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/storage1.png')";
      }

      else if (room === 3) {
        floor4.style.backgroundImage = "url('../25FLOORS/images/storage2.png')";
        floor4.style.backgroundImage = "url('../25FLOORS/images/storage2.png')";
      }

      else {
        room = room - 1;

        return false;
      }
    }
  }

  else if (floor === 5) {
    if (direction === "left") {
      gong.cloneNode(true).play();

      room = room - 1;

      if (room === -1) {
        floor5.style.backgroundImage = "url('../25FLOORS/images/future1.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/future1.png')";
      }

      else if (room === 0) {
        $("#floor5-elevator-div").hide();
        
        console.log("test");

        floor5.style.backgroundImage = "url('../25FLOORS/images/future2.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/future2.png')";
      }

      else if (room === 1) {
        $("#floor5-elevator-div").show();
        
        console.log("test");

        floor5.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor5-elevator-div").hide();

        floor5.style.backgroundImage = "url('../25FLOORS/images/future3.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/future3.png')";
      }

      else {
        room = room + 1;

        return false;
      }
    }

    else if (direction === "right") {
      gong.cloneNode(true).play();

      room = room + 1;

      if (room === 0) {
        $("#floor5-elevator-div").hide();
        
        console.log("test");

        floor5.style.backgroundImage = "url('../25FLOORS/images/future2.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/future2.png')";
      }

      else if (room === 1) {
        $("#floor5-elevator-div").show();
        
        console.log("test");

        floor5.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/elevator.png')";
      }

      else if (room === 2) {
        $("#floor5-elevator-div").hide();

        floor5.style.backgroundImage = "url('../25FLOORS/images/future3.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/future3.png')";
      }

      else if (room === 3) {
        floor5.style.backgroundImage = "url('../25FLOORS/images/future4.png')";
        floor5.style.backgroundImage = "url('../25FLOORS/images/future4.png')";
      }

      else {
        room = room - 1;

        return false;
      }
    }
  }
}

$(document).keydown(function (event) {
  if (game_mode === 0) {
    if (event.which === 88) {
      checkIfSelect();
    }

    else if (event.which === 65) {
      getRoom("left");
    }

    else if (event.which === 68) {
      getRoom("right");
    }
  }

  else if (game_mode === 1) {
    if (event.which === 88) {
      checkBackButtons();
    }
  }

  else if (game_mode == 2) {
    if (event.which === 88) {
      checkIfSelect();
    }

    else if (event.which === 65) {
      getRoom("left");
    }

    else if (event.which === 68) {
      getRoom("right");
    }
  }
});

// Elevator lift 

elevator_lift.addEventListener("mousemove", function (event) {
  elevator_lift.style.backgroundPositionX = - elevator_lift.offsetX * 1.8 + "px";
  elevator_lift.style.backgroundPositionY = - event.offsetY + 80 + "px";
});