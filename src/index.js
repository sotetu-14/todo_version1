import "./styles.css";

document.getElementById("add_button").addEventListener("click", () => {
  // inputの中身を取得(add_text)
  const add_text = document.getElementById("add_text").value;
  // inputの中身を除去
  document.getElementById("add_text").value = "";
  // 要素となるliとdivとbuttonを作る
  const li = document.createElement("li");
  const div = document.createElement("div");
  const complete_button = document.createElement("button");
  const delete_button = document.createElement("button");
  div.className = "list_row";
  // divにliとbuttonをいれこむ
  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);
  document.getElementById("incomplete_list").appendChild(div);
  // buttonに文字書き込み
  complete_button.innerText = "完了";
  delete_button.innerText = "削除";
  // liに書き込み
  li.innerText = add_text;

  // ボタンの設定！！！
  // 完了ボタンの動作
  complete_button.addEventListener("click", () => {
    // 下段に作る(1)
    let list_parent = complete_button.parentNode;
    const to_do = list_parent.querySelector("li");
    // 必要な要素(タグ)を作る
    const comp_name = document.createElement("li");
    const comp_frame = document.createElement("div");
    const back_button = document.createElement("button");
    // 作った要素を整列させる
    comp_frame.appendChild(comp_name);
    comp_frame.appendChild(back_button);
    document.getElementById("complete_list").appendChild(comp_frame);
    // todo_の値とボタンの文字を代入
    comp_name.textContent = to_do.textContent;
    back_button.innerText = "戻す";
    // comp_nameにクラスをつける
    comp_frame.className = "list_row";
    document.getElementById("incomplete_list").removeChild(div);
    // 戻すボタンの動作
    back_button.addEventListener("click", () => {
      document.getElementById("incomplete_list").appendChild(div);
      document.getElementById("complete_list").removeChild(comp_frame);
    });
  });
  // 削除ボタンの動作
  delete_button.addEventListener("click", () => {
    const list_parent = delete_button.parentNode;
    list_parent.remove();
  });
});
