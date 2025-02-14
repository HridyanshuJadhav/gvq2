//this function is used to generate score 

function level2_submit() {
  let result2 = 0;
  let q21 = document.querySelector('input[name=q21]:checked');
  if (q21 == q21_1) {
    result2 += 1;
    document.getElementById("q21_1_p").innerHTML = "&#x2713;";
  }
  if (q21 == q21_2) {
    result2 += 0;
    document.getElementById("q21_2_p").innerHTML = "&#x2715;";
    document.getElementById("q21_1_p").innerHTML = "&#x2713;";
  }
  if (q21 == q21_3) {
    result2 += 0;
    document.getElementById("q21_3_p").innerHTML = "&#x2715;";
    document.getElementById("q21_1_p").innerHTML = "&#x2713;";
  }
  if (q21 == q21_4) {
    result2 += 0;
    document.getElementById("q21_4_p").innerHTML = "&#x2715;";
    document.getElementById("q21_1_p").innerHTML = "&#x2713;";
  }

  let q22 = document.querySelector('input[name=q22]:checked');
  if (q22 == q22_1) {
    result2 += 1;
    document.getElementById("q22_1_p").innerHTML = "&#x2713;";
  }
  if (q22 == q22_2) {
    result2 += 0;
    document.getElementById("q22_2_p").innerHTML = "&#x2715;";
    document.getElementById("q22_1_p").innerHTML = "&#x2713;";
  }
  if (q22 == q22_3) {
    result2 += 0;
    document.getElementById("q22_3_p").innerHTML = "&#x2715;";
    document.getElementById("q22_1_p").innerHTML = "&#x2713;";
  }
  if (q22 == q22_4) {
    result2 += 0;
    document.getElementById("q22_4_p").innerHTML = "&#x2715;";
    document.getElementById("q22_1_p").innerHTML = "&#x2713;";
  }

  let q23 = document.querySelector('input[name=q23]:checked');
  if (q23 == q23_1) {
    result2 += 0;
    document.getElementById("q23_1_p").innerHTML = "&#x2715;";
    document.getElementById("q23_2_p").innerHTML = "&#x2713;";
  }
  if (q23 == q23_2) {
    result2 += 1;
    document.getElementById("q23_2_p").innerHTML = "&#x2713;";
  }
  if (q23 == q23_3) {
    result2 += 0;
    document.getElementById("q23_3_p").innerHTML = "&#x2715;";
    document.getElementById("q23_2_p").innerHTML = "&#x2713;";
  }
  if (q23 == q23_4) {
    result2 += 0;
    document.getElementById("q23_4_p").innerHTML = "&#x2715;";
    document.getElementById("q23_2_p").innerHTML = "&#x2713;";
  }

  let q24 = document.querySelector('input[name=q24]:checked');
  if (q24 == q24_1) {
    result2 += 0;
    document.getElementById("q24_1_p").innerHTML = "&#x2715;";
    document.getElementById("q24_3_p").innerHTML = "&#x2713;";
  }
  if (q24 == q24_2) {
    result2 += 0;
    document.getElementById("q24_2_p").innerHTML = "&#x2715;";
    document.getElementById("q24_3_p").innerHTML = "&#x2713;";
  }
  if (q24 == q24_3) {
    result2 += 1;
    document.getElementById("q24_3_p").innerHTML = "&#x2713;";
  }
  if (q24 == q24_4) {
    result2 += 0;
    document.getElementById("q24_4_p").innerHTML = "&#x2715;";
    document.getElementById("q24_3_p").innerHTML = "&#x2713;";
  }

  let q25 = document.querySelector('input[name=q25]:checked');
  if (q25 == q25_1) {
    result2 += 0;
    document.getElementById("q25_1_p").innerHTML = "&#x2715;";
    document.getElementById("q25_2_p").innerHTML = "&#x2713;";
  }
  if (q25 == q25_2) {
    result2 += 1;
    document.getElementById("q25_2_p").innerHTML = "&#x2713;";
  }
  if (q25 == q25_3) {
    result2 += 0;
    document.getElementById("q25_3_p").innerHTML = "&#x2715;";
    document.getElementById("q25_2_p").innerHTML = "&#x2713;";
  }
  if (q25 == q25_4) {
    result2 += 0;
    document.getElementById("q25_4_p").innerHTML = "&#x2715;";
    document.getElementById("q25_2_p").innerHTML = "&#x2713;";
  }

  let q26 = document.querySelector('input[name=q26]:checked');
  if (q26 == q26_1) {
    result2 += 0;
    document.getElementById("q26_1_p").innerHTML = "&#x2715;";
    document.getElementById("q26_2_p").innerHTML = "&#x2713;";
  }
  if (q26 == q26_2) {
    result2 += 1;
    document.getElementById("q26_2_p").innerHTML = "&#x2713;";
  }
  if (q26 == q26_3) {
    result2 += 0;
    document.getElementById("q26_3_p").innerHTML = "&#x2715;";
    document.getElementById("q26_2_p").innerHTML = "&#x2713;";
  }
  if (q26 == q26_4) {
    result2 += 0;
    document.getElementById("q26_4_p").innerHTML = "&#x2715;";
    document.getElementById("q26_2_p").innerHTML = "&#x2713;";
  }

  let q27 = document.querySelector('input[name=q27]:checked');
  if (q27 == q27_1) {
    result2 += 1;
    document.getElementById("q27_1_p").innerHTML = "&#x2713;";
  }
  if (q27 == q27_2) {
    result2 += 0;
    document.getElementById("q27_2_p").innerHTML = "&#x2715;";
    document.getElementById("q27_1_p").innerHTML = "&#x2713;";
  }
  if (q27 == q27_3) {
    result2 += 0;
    document.getElementById("q27_3_p").innerHTML = "&#x2715;";
    document.getElementById("q27_1_p").innerHTML = "&#x2713;";
  }
  if (q27 == q27_4) {
    result2 += 0;
    document.getElementById("q27_4_p").innerHTML = "&#x2715;";
    document.getElementById("q27_1_p").innerHTML = "&#x2713;";
  }

  let q28 = document.querySelector('input[name=q28]:checked');
  if (q28 == q28_1) {
    result2 += 1;
    document.getElementById("q28_1_p").innerHTML = "&#x2713;";
  }
  if (q28 == q28_2) {
    result2 += 0;
    document.getElementById("q28_2_p").innerHTML = "&#x2715;";
    document.getElementById("q28_1_p").innerHTML = "&#x2713;";
  }
  if (q28 == q28_3) {
    result2 += 0;
    document.getElementById("q28_3_p").innerHTML = "&#x2715;";
    document.getElementById("q28_1_p").innerHTML = "&#x2713;";
  }
  if (q28 == q28_4) {
    result2 += 0;
    document.getElementById("q28_4_p").innerHTML = "&#x2715;";
    document.getElementById("q28_1_p").innerHTML = "&#x2713;";
  }

  let q29 = document.querySelector('input[name=q29]:checked');
  if (q29 == q29_1) {
    result2 += 0;
    document.getElementById("q29_1_p").innerHTML = "&#x2715;";
    document.getElementById("q29_2_p").innerHTML = "&#x2713;";
  }
  if (q29 == q29_2) {
    result2 += 1;
    document.getElementById("q29_2_p").innerHTML = "&#x2713;";
  }
  if (q29 == q29_3) {
    result2 += 0;
    document.getElementById("q29_3_p").innerHTML = "&#x2715;";
    document.getElementById("q29_2_p").innerHTML = "&#x2713;";
  }
  if (q29 == q29_4) {
    result2 += 0;
    document.getElementById("q29_4_p").innerHTML = "&#x2715;";
    document.getElementById("q29_2_p").innerHTML = "&#x2713;";
  }

  let q30 = document.querySelector('input[name=q30]:checked');
  if (q30 == q30_1) {
    result2 += 0;
    document.getElementById("q30_1_p").innerHTML = "&#x2715;";
    document.getElementById("q30_3_p").innerHTML = "&#x2713;";
  }
  if (q30 == q30_2) {
    result2 += 0;
    document.getElementById("q30_2_p").innerHTML = "&#x2715;";
    document.getElementById("q30_3_p").innerHTML = "&#x2713;";
  }
  if (q30 == q30_3) {
    result2 += 1;
    document.getElementById("q30_3_p").innerHTML = "&#x2713;";
  }
  if (q30 == q30_4) {
    result2 += 0;
    document.getElementById("q30_4_p").innerHTML = "&#x2715;";
    document.getElementById("q30_3_p").innerHTML = "&#x2713;";
  }

  let q31 = document.querySelector('input[name=q31]:checked');
  if (q31 == q31_1) {
    result2 += 1;
    document.getElementById("q31_1_p").innerHTML = "&#x2713;";
  }
  if (q31 == q31_2) {
    result2 += 0;
    document.getElementById("q31_2_p").innerHTML = "&#x2715;";
    document.getElementById("q31_1_p").innerHTML = "&#x2713;";
  }
  if (q31 == q31_3) {
    result2 += 0;
    document.getElementById("q31_3_p").innerHTML = "&#x2715;";
    document.getElementById("q31_1_p").innerHTML = "&#x2713;";
  }
  if (q31 == q31_4) {
    result2 += 0;
    document.getElementById("q31_4_p").innerHTML = "&#x2715;";
    document.getElementById("q31_1_p").innerHTML = "&#x2713;";
  }

  let q32 = document.querySelector('input[name=q32]:checked');
  if (q32 == q32_1) {
    result2 += 0;
    document.getElementById("q32_1_p").innerHTML = "&#x2715;";
    document.getElementById("q32_3_p").innerHTML = "&#x2713;";
  }
  if (q32 == q32_2) {
    result2 += 0;
    document.getElementById("q32_2_p").innerHTML = "&#x2715;";
    document.getElementById("q32_3_p").innerHTML = "&#x2713;";
  }
  if (q32 == q32_3) {
    result2 += 1;
    document.getElementById("q32_3_p").innerHTML = "&#x2713;";
  }
  if (q32 == q32_4) {
    result2 += 0;
    document.getElementById("q32_4_p").innerHTML = "&#x2715;";
    document.getElementById("q32_3_p").innerHTML = "&#x2713;";
  }

  let q33 = document.querySelector('input[name=q33]:checked');
  if (q33 == q33_1) {
    result2 += 1;
    document.getElementById("q33_1_p").innerHTML = "&#x2713;";
  }
  if (q33 == q33_2) {
    result2 += 0;
    document.getElementById("q33_2_p").innerHTML = "&#x2715;";
    document.getElementById("q33_1_p").innerHTML = "&#x2713;";
  }
  if (q33 == q33_3) {
    result2 += 0;
    document.getElementById("q33_3_p").innerHTML = "&#x2715;";
    document.getElementById("q33_1_p").innerHTML = "&#x2713;";
  }
  if (q33 == q33_4) {
    result2 += 0;
    document.getElementById("q33_4_p").innerHTML = "&#x2715;";
    document.getElementById("q33_1_p").innerHTML = "&#x2713;";
  }

  let q34 = document.querySelector('input[name=q34]:checked');
  if (q34 == q34_1) {
    result2 += 0;
    document.getElementById("q34_1_p").innerHTML = "&#x2715;";
    document.getElementById("q34_3_p").innerHTML = "&#x2713;";
  }
  if (q34 == q34_2) {
    result2 += 0;
    document.getElementById("q34_2_p").innerHTML = "&#x2715;";
    document.getElementById("q34_3_p").innerHTML = "&#x2713;";
  }
  if (q34 == q34_3) {
    result2 += 1;
    document.getElementById("q34_3_p").innerHTML = "&#x2713;";
  }
  if (q34 == q34_4) {
    result2 += 0;
    document.getElementById("q34_4_p").innerHTML = "&#x2715;";
    document.getElementById("q34_3_p").innerHTML = "&#x2713;";
  }

  let q35 = document.querySelector('input[name=q35]:checked');
  if (q35 == q35_1) {
    result2 += 0;
    document.getElementById("q35_1_p").innerHTML = "&#x2715;";
    document.getElementById("q35_3_p").innerHTML = "&#x2713;";
  }
  if (q35 == q35_2) {
    result2 += 0;
    document.getElementById("q35_2_p").innerHTML = "&#x2715;";
    document.getElementById("q35_3_p").innerHTML = "&#x2713;";
  }
  if (q35 == q35_3) {
    result2 += 1;
    document.getElementById("q35_3_p").innerHTML = "&#x2713;";
  }
  if (q35 == q35_4) {
    result2 += 0;
    document.getElementById("q35_4_p").innerHTML = "&#x2715;";
    document.getElementById("q35_3_p").innerHTML = "&#x2713;";
  }

  let q36 = document.querySelector('input[name=q36]:checked');
  if (q36 == q36_1) {
    result2 += 0;
    document.getElementById("q36_1_p").innerHTML = "&#x2715;";
    document.getElementById("q36_2_p").innerHTML = "&#x2713;";
  }
  if (q36 == q36_2) {
    result2 += 1;
    document.getElementById("q36_2_p").innerHTML = "&#x2713;";
  }
  if (q36 == q36_3) {
    result2 += 0;
    document.getElementById("q36_3_p").innerHTML = "&#x2715;";
    document.getElementById("q36_2_p").innerHTML = "&#x2713;";
  }
  if (q36 == q36_4) {
    result2 += 0;
    document.getElementById("q36_4_p").innerHTML = "&#x2715;";
    document.getElementById("q36_2_p").innerHTML = "&#x2713;";
  }

  let q37 = document.querySelector('input[name=q37]:checked');
  if (q37 == q37_1) {
    result2 += 0;
    document.getElementById("q37_1_p").innerHTML = "&#x2715;";
    document.getElementById("q37_4_p").innerHTML = "&#x2713;";
  }
  if (q37 == q37_2) {
    result2 += 0;
    document.getElementById("q37_2_p").innerHTML = "&#x2715;";
    document.getElementById("q37_4_p").innerHTML = "&#x2713;";
  }
  if (q37 == q37_3) {
    result2 += 0;
    document.getElementById("q37_3_p").innerHTML = "&#x2715;";
    document.getElementById("q37_4_p").innerHTML = "&#x2713;";
  }
  if (q37 == q37_4) {
    result2 += 1;
    document.getElementById("q37_4_p").innerHTML = "&#x2713;";
  }

  let q38 = document.querySelector('input[name=q38]:checked');
  if (q38 == q38_1) {
    result2 += 0;
    document.getElementById("q38_1_p").innerHTML = "&#x2715;";
    document.getElementById("q38_4_p").innerHTML = "&#x2713;";
  }
  if (q38 == q38_2) {
    result2 += 0;
    document.getElementById("q38_2_p").innerHTML = "&#x2715;";
    document.getElementById("q38_4_p").innerHTML = "&#x2713;";
  }
  if (q38 == q38_3) {
    result2 += 0;
    document.getElementById("q38_3_p").innerHTML = "&#x2715;";
    document.getElementById("q38_4_p").innerHTML = "&#x2713;";
  }
  if (q38 == q38_4) {
    result2 += 1;
    document.getElementById("q38_4_p").innerHTML = "&#x2713;";
  }

  let q39 = document.querySelector('input[name=q39]:checked');
  if (q39 == q39_1) {
    result2 += 0;
    document.getElementById("q39_1_p").innerHTML = "&#x2715;";
    document.getElementById("q39_2_p").innerHTML = "&#x2713;";
  }
  if (q39 == q39_2) {
    result2 += 1;
    document.getElementById("q39_2_p").innerHTML = "&#x2713;";
  }
  if (q39 == q39_3) {
    result2 += 0;
    document.getElementById("q39_3_p").innerHTML = "&#x2715;";
    document.getElementById("q39_2_p").innerHTML = "&#x2713;";
  }
  if (q39 == q39_4) {
    result2 += 0;
    document.getElementById("q39_4_p").innerHTML = "&#x2715;";
    document.getElementById("q39_2_p").innerHTML = "&#x2713;";
  }

  let q40 = document.querySelector('input[name=q40]:checked');
  if (q40 == q40_1) {
    result2 += 0;
    document.getElementById("q40_1_p").innerHTML = "&#x2715;";
    document.getElementById("q40_4_p").innerHTML = "&#x2713;";
  }
  if (q40 == q40_2) {
    result2 += 0;
    document.getElementById("q40_2_p").innerHTML = "&#x2715;";
    document.getElementById("q40_4_p").innerHTML = "&#x2713;";
  }
  if (q40 == q40_3) {
    result2 += 0;
    document.getElementById("q40_3_p").innerHTML = "&#x2715;";
    document.getElementById("q40_4_p").innerHTML = "&#x2713;";
  }
  if (q40 == q40_4) {
    result2 += 1;
    document.getElementById("q40_4_p").innerHTML = "&#x2713;";
  }



  if (result2 < 8) {
    document.getElementById("level2_go").disabled = true;
    document.getElementById("level2_result").innerHTML = "Your score is " + result2 + " out of 20. You failed the level. You can't go to the next level. Please try again.";
  }
  if (result2 >= 8) {
    document.getElementById("level2_go").disabled = false;
    document.getElementById("level2_result").innerHTML = "Your score is " + result2 + " out of 20. You passed the level. You can go to the next level.";
  }
}

function level2_reset() {
  for (let i = 21; i <= 40; i++) {
    for (let j = 1; j <= 4; j++) {
      document.getElementById("q" + i + "_" + j + "_p").innerHTML = " ";
    }
  };
  document.getElementById("level2_result").innerHTML = " ";
  document.querySelectorAll('input[type=radio]:checked').forEach(radio => radio.checked = false);
  document.getElementById("level2_go").disabled = true;
}