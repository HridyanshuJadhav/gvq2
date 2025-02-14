//this function is used to generate score 
function level3_result() {
  let result3 = 0;
  let q41 = document.querySelector('input[name=q41]:checked');
  if (q41 == q41_1) {
    result3 += 1;
    document.getElementById("q41_1_p").innerHTML = "&#x2713;";
  }
  if (q41 == q41_2) {
    result3 += 0;
    document.getElementById("q41_2_p").innerHTML = "&#x2715;";
    document.getElementById("q41_1_p").innerHTML = "&#x2713;";
  }
  if (q41 == q41_3) {
    result3 += 0;
    document.getElementById("q41_3_p").innerHTML = "&#x2715;";
    document.getElementById("q41_1_p").innerHTML = "&#x2713;";
  }
  if (q41 == q41_4) {
    result3 += 0;
    document.getElementById("q41_4_p").innerHTML = "&#x2715;";
    document.getElementById("q41_1_p").innerHTML = "&#x2713;";
  }

  let q42 = document.querySelector('input[name=q42]:checked');
  if (q42 == q42_1) {
    result3 += 0;
    document.getElementById("q42_1_p").innerHTML = "&#x2715;";
    document.getElementById("q42_2_p").innerHTML = "&#x2713;";
  }
  if (q42 == q42_2) {
    result3 += 1;
    document.getElementById("q42_2_p").innerHTML = "&#x2713;";
  }
  if (q42 == q42_3) {
    result3 += 0;
    document.getElementById("q42_3_p").innerHTML = "&#x2715;";
    document.getElementById("q42_2_p").innerHTML = "&#x2713;";
  }
  if (q42 == q42_4) {
    result3 += 0;
    document.getElementById("q42_4_p").innerHTML = "&#x2715;";
    document.getElementById("q42_2_p").innerHTML = "&#x2713;";
  }

  let q43 = document.querySelector('input[name=q43]:checked');
  if (q43 == q43_1) {
    result3 += 1;
    document.getElementById("q43_1_p").innerHTML = "&#x2713;";
  }
  if (q43 == q43_2) {
    result3 += 0;
    document.getElementById("q43_2_p").innerHTML = "&#x2715;";
    document.getElementById("q43_1_p").innerHTML = "&#x2713;";
  }
  if (q43 == q43_3) {
    result3 += 0;
    document.getElementById("q43_3_p").innerHTML = "&#x2715;";
    document.getElementById("q43_1_p").innerHTML = "&#x2713;";
  }
  if (q43 == q43_4) {
    result3 += 0;
    document.getElementById("q43_4_p").innerHTML = "&#x2715;";
    document.getElementById("q43_1_p").innerHTML = "&#x2713;";
  }

  let q44 = document.querySelector('input[name=q44]:checked');
  if (q44 == q44_1) {
    result3 += 0;
    document.getElementById("q44_1_p").innerHTML = "&#x2715;";
    document.getElementById("q44_4_p").innerHTML = "&#x2713;";
  }
  if (q44 == q44_2) {
    result3 += 0;
    document.getElementById("q44_2_p").innerHTML = "&#x2715;";
    document.getElementById("q44_4_p").innerHTML = "&#x2713;";
  }
  if (q44 == q44_3) {
    result3 += 0;
    document.getElementById("q44_3_p").innerHTML = "&#x2715;";
    document.getElementById("q44_4_p").innerHTML = "&#x2713;";
  }
  if (q44 == q44_4) {
    result3 += 1;
    document.getElementById("q44_4_p").innerHTML = "&#x2713;";
  }

  let q45 = document.querySelector('input[name=q45]:checked');
  if (q45 == q45_1) {
    result3 += 0;
    document.getElementById("q45_1_p").innerHTML = "&#x2715;";
    document.getElementById("q45_4_p").innerHTML = "&#x2713;";
  }
  if (q45 == q45_2) {
    result3 += 0;
    document.getElementById("q45_2_p").innerHTML = "&#x2715;";
    document.getElementById("q45_4_p").innerHTML = "&#x2713;";
  }
  if (q45 == q45_3) {
    result3 += 0;
    document.getElementById("q45_3_p").innerHTML = "&#x2715;";
    document.getElementById("q45_4_p").innerHTML = "&#x2713;";
  }
  if (q45 == q45_4) {
    result3 += 1;
    document.getElementById("q45_4_p").innerHTML = "&#x2713;";
  }

  let q46 = document.querySelector('input[name=q46]:checked');
  if (q46 == q46_1) {
    result3 += 1;
    document.getElementById("q46_1_p").innerHTML = "&#x2713;";
  }
  if (q46 == q46_2) {
    result3 += 0;
    document.getElementById("q46_2_p").innerHTML = "&#x2715;";
    document.getElementById("q46_1_p").innerHTML = "&#x2713;";
  }
  if (q46 == q46_3) {
    result3 += 0;
    document.getElementById("q46_3_p").innerHTML = "&#x2715;";
    document.getElementById("q46_1_p").innerHTML = "&#x2713;";
  }
  if (q46 == q46_4) {
    result3 += 0;
    document.getElementById("q46_4_p").innerHTML = "&#x2715;";
    document.getElementById("q46_1_p").innerHTML = "&#x2713;";
  }

  let q47 = document.querySelector('input[name=q47]:checked');
  if (q47 == q47_1) {
    result3 += 0;
    document.getElementById("q47_1_p").innerHTML = "&#x2715;";
    document.getElementById("q47_3_p").innerHTML = "&#x2713;";
  }
  if (q47 == q47_2) {
    result3 += 0;
    document.getElementById("q47_2_p").innerHTML = "&#x2715;";
    document.getElementById("q47_3_p").innerHTML = "&#x2713;";
  }
  if (q47 == q47_3) {
    result3 += 1;
    document.getElementById("q47_3_p").innerHTML = "&#x2713;";
  }
  if (q47 == q47_4) {
    result3 += 0;
    document.getElementById("q47_4_p").innerHTML = "&#x2715;";
    document.getElementById("q47_3_p").innerHTML = "&#x2713;";
  }

  let q48 = document.querySelector('input[name=q48]:checked');
  if (q48 == q48_1) {
    result3 += 0;
    document.getElementById("q48_1_p").innerHTML = "&#x2715;";
    document.getElementById("q48_3_p").innerHTML = "&#x2713;";
  }
  if (q48 == q48_2) {
    result3 += 0;
    document.getElementById("q48_2_p").innerHTML = "&#x2715;";
    document.getElementById("q48_3_p").innerHTML = "&#x2713;";
  }
  if (q48 == q48_3) {
    result3 += 1;
    document.getElementById("q48_3_p").innerHTML = "&#x2713;";
  }
  if (q48 == q48_4) {
    result3 += 0;
    document.getElementById("q48_4_p").innerHTML = "&#x2715;";
    document.getElementById("q48_3_p").innerHTML = "&#x2713;";
  }

  let q49 = document.querySelector('input[name=q49]:checked');
  if (q49 == q49_1) {
    result3 += 0;
    document.getElementById("q49_1_p").innerHTML = "&#x2715;";
    document.getElementById("q49_3_p").innerHTML = "&#x2713;";
  }
  if (q49 == q49_2) {
    result3 += 0;
    document.getElementById("q49_2_p").innerHTML = "&#x2715;";
    document.getElementById("q49_3_p").innerHTML = "&#x2713;";
  }
  if (q49 == q49_3) {
    result3 += 1;
    document.getElementById("q49_3_p").innerHTML = "&#x2713;";
  }
  if (q49 == q49_4) {
    result3 += 0;
    document.getElementById("q49_4_p").innerHTML = "&#x2715;";
    document.getElementById("q49_3_p").innerHTML = "&#x2713;";
  }

  let q50 = document.querySelector('input[name=q50]:checked');
  if (q50 == q50_1) {
    result3 += 1;
    document.getElementById("q50_1_p").innerHTML = "&#x2713;";
  }
  if (q50 == q50_2) {
    result3 += 0;
    document.getElementById("q50_2_p").innerHTML = "&#x2715;";
    document.getElementById("q50_1_p").innerHTML = "&#x2713;";
  }
  if (q50 == q50_3) {
    result3 += 0;
    document.getElementById("q50_3_p").innerHTML = "&#x2715;";
    document.getElementById("q50_1_p").innerHTML = "&#x2713;";
  }
  if (q50 == q50_4) {
    result3 += 0;
    document.getElementById("q50_4_p").innerHTML = "&#x2715;";
    document.getElementById("q50_1_p").innerHTML = "&#x2713;";
  }

  let q51 = document.querySelector('input[name=q51]:checked');
  if (q51 == q51_1) {
    result3 += 0;
    document.getElementById("q51_1_p").innerHTML = "&#x2715;";
    document.getElementById("q51_2_p").innerHTML = "&#x2713;";
  }
  if (q51 == q51_2) {
    result3 += 1;
    document.getElementById("q51_2_p").innerHTML = "&#x2713;";
  }
  if (q51 == q51_3) {
    result3 += 0;
    document.getElementById("q51_3_p").innerHTML = "&#x2715;";
    document.getElementById("q51_2_p").innerHTML = "&#x2713;";
  }
  if (q51 == q51_4) {
    result3 += 0;
    document.getElementById("q51_4_p").innerHTML = "&#x2715;";
    document.getElementById("q51_2_p").innerHTML = "&#x2713;";
  }

  let q52 = document.querySelector('input[name=q52]:checked');
  if (q52 == q52_1) {
    result3 += 0;
    document.getElementById("q52_1_p").innerHTML = "&#x2715;";
    document.getElementById("q52_2_p").innerHTML = "&#x2713;";
  }
  if (q52 == q52_2) {
    result3 += 1;
    document.getElementById("q52_2_p").innerHTML = "&#x2713;";
  }
  if (q52 == q52_3) {
    result3 += 0;
    document.getElementById("q52_3_p").innerHTML = "&#x2715;";
    document.getElementById("q52_2_p").innerHTML = "&#x2713;";
  }
  if (q52 == q52_4) {
    result3 += 0;
    document.getElementById("q52_4_p").innerHTML = "&#x2715;";
    document.getElementById("q52_2_p").innerHTML = "&#x2713;";
  }

  let q53 = document.querySelector('input[name=q53]:checked');
  if (q53 == q53_1) {
    result3 += 0;
    document.getElementById("q53_1_p").innerHTML = "&#x2715;";
    document.getElementById("q53_2_p").innerHTML = "&#x2713;";
  }
  if (q53 == q53_2) {
    result3 += 1;
    document.getElementById("q53_2_p").innerHTML = "&#x2713;";
  }
  if (q53 == q53_3) {
    result3 += 0;
    document.getElementById("q53_3_p").innerHTML = "&#x2715;";
    document.getElementById("q53_2_p").innerHTML = "&#x2713;";
  }
  if (q53 == q53_4) {
    result3 += 0;
    document.getElementById("q53_4_p").innerHTML = "&#x2715;";
    document.getElementById("q53_2_p").innerHTML = "&#x2713;";
  }

  let q54 = document.querySelector('input[name=q54]:checked');
  if (q54 == q54_1) {
    result3 += 1;
    document.getElementById("q54_1_p").innerHTML = "&#x2713;";
  }
  if (q54 == q54_2) {
    result3 += 0;
    document.getElementById("q54_2_p").innerHTML = "&#x2715;";
    document.getElementById("q54_1_p").innerHTML = "&#x2713;";
  }
  if (q54 == q54_3) {
    result3 += 0;
    document.getElementById("q54_3_p").innerHTML = "&#x2715;";
    document.getElementById("q54_1_p").innerHTML = "&#x2713;";
  }
  if (q54 == q54_4) {
    result3 += 0;
    document.getElementById("q54_4_p").innerHTML = "&#x2715;";
    document.getElementById("q54_1_p").innerHTML = "&#x2713;";
  }

  let q55 = document.querySelector('input[name=q55]:checked');
  if (q55 == q55_1) {
    result3 += 0;
    document.getElementById("q55_1_p").innerHTML = "&#x2715;";
    document.getElementById("q55_2_p").innerHTML = "&#x2713;";
  }
  if (q55 == q55_2) {
    result3 += 1;
    document.getElementById("q55_2_p").innerHTML = "&#x2713;";
  }
  if (q55 == q55_3) {
    result3 += 0;
    document.getElementById("q55_3_p").innerHTML = "&#x2715;";
    document.getElementById("q55_2_p").innerHTML = "&#x2713;";
  }
  if (q55 == q55_4) {
    result3 += 0;
    document.getElementById("q55_4_p").innerHTML = "&#x2715;";
    document.getElementById("q55_2_p").innerHTML = "&#x2713;";
  }

  let q56 = document.querySelector('input[name=q56]:checked');
  if (q56 == q56_1) {
    result3 += 0;
    document.getElementById("q56_1_p").innerHTML = "&#x2715;";
    document.getElementById("q56_3_p").innerHTML = "&#x2713;";
  }
  if (q56 == q56_2) {
    result3 += 0;
    document.getElementById("q56_2_p").innerHTML = "&#x2715;";
    document.getElementById("q56_3_p").innerHTML = "&#x2713;";
  }
  if (q56 == q56_3) {
    result3 += 1;
    document.getElementById("q56_3_p").innerHTML = "&#x2713;";
  }
  if (q56 == q56_4) {
    result3 += 0;
    document.getElementById("q56_4_p").innerHTML = "&#x2715;";
    document.getElementById("q56_3_p").innerHTML = "&#x2713;";
  }

  let q57 = document.querySelector('input[name=q57]:checked');
  if (q57 == q57_1) {
    result3 += 0;
    document.getElementById("q57_1_p").innerHTML = "&#x2715;";
    document.getElementById("q57_2_p").innerHTML = "&#x2713;";
  }
  if (q57 == q57_2) {
    result3 += 1;
    document.getElementById("q57_2_p").innerHTML = "&#x2713;";
  }
  if (q57 == q57_3) {
    result3 += 0;
    document.getElementById("q57_3_p").innerHTML = "&#x2715;";
    document.getElementById("q57_2_p").innerHTML = "&#x2713;";
  }
  if (q57 == q57_4) {
    result3 += 0;
    document.getElementById("q57_4_p").innerHTML = "&#x2715;";
    document.getElementById("q57_2_p").innerHTML = "&#x2713;";
  }

  let q58 = document.querySelector('input[name=q58]:checked');
  if (q58 == q58_1) {
    result3 += 0;
    document.getElementById("q58_1_p").innerHTML = "&#x2715;";
    document.getElementById("q58_2_p").innerHTML = "&#x2713;";
  }
  if (q58 == q58_2) {
    result3 += 1;
    document.getElementById("q58_2_p").innerHTML = "&#x2713;";
  }
  if (q58 == q58_3) {
    result3 += 0;
    document.getElementById("q58_3_p").innerHTML = "&#x2715;";
    document.getElementById("q58_2_p").innerHTML = "&#x2713;";
  }
  if (q58 == q58_4) {
    result3 += 0;
    document.getElementById("q58_4_p").innerHTML = "&#x2715;";

    document.getElementById("q58_2_p").innerHTML = "&#x2713;";
  }

  let q59 = document.querySelector('input[name=q59]:checked');
  if (q59 == q59_1) {
    result3 += 0;
    document.getElementById("q59_1_p").innerHTML = "&#x2715;";
    document.getElementById("q59_3_p").innerHTML = "&#x2713;";
  }
  if (q59 == q59_2) {
    result3 += 0;
    document.getElementById("q59_2_p").innerHTML = "&#x2715;";
    document.getElementById("q59_3_p").innerHTML = "&#x2713;";
  }
  if (q59 == q59_3) {
    result3 += 1;
    document.getElementById("q59_3_p").innerHTML = "&#x2713;";
  }
  if (q59 == q59_4) {
    result3 += 0;
    document.getElementById("q59_4_p").innerHTML = "&#x2715;";
    document.getElementById("q59_3_p").innerHTML = "&#x2713;";
  }

  let q60 = document.querySelector('input[name=q60]:checked');
  if (q60 == q60_1) {
    result3 += 1;
    document.getElementById("q60_1_p").innerHTML = "&#x2713;";
  }
  if (q60 == q60_2) {
    result3 += 0;
    document.getElementById("q60_2_p").innerHTML = "&#x2715;";
    document.getElementById("q60_1_p").innerHTML = "&#x2713;";
  }
  if (q60 == q60_3) {
    result3 += 0;
    document.getElementById("q60_3_p").innerHTML = "&#x2715;";
    document.getElementById("q60_1_p").innerHTML = "&#x2713;";
  }
  if (q60 == q60_4) {
    result3 += 0;
    document.getElementById("q60_4_p").innerHTML = "&#x2715;";
    document.getElementById("q60_1_p").innerHTML = "&#x2713;";
  }


  if (result3 < 8) {
    document.getElementById("level3_go").disabled = true;
    document.getElementById("level3_result").innerHTML = "Your score is " + result3 + " out of 20. You failed the level. You can't go to the next level. Please try again.";
  }
  if (result3 >= 8) {
    document.getElementById("level3_go").disabled = false;
    document.getElementById("level3_result").innerHTML = "Your score is " + result3 + " out of 20. You passed the level. You can go to the next level.";
  }

}

function level3_reset() {

  for (let i = 41; i <= 60; i++) {
    for (let j = 1; j <= 4; j++) {
      document.getElementById("q" + i + "_" + j + "_p").innerHTML = " ";
    }
  }

  document.getElementById("level3_result").innerHTML = " ";
  document.querySelectorAll('input[type=radio]:checked').forEach(radio => radio.checked = false);
  document.getElementById("level3_go").disabled = true;
}