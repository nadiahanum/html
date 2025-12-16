const commentInput = document.getElementById("commentInput");
const submitComment = document.getElementById("submitComment");
const commentList = document.getElementById("commentList");
const errorComment = document.getElementById("errorComment");

submitComment.addEventListener("click", function () {
    // Bersihkan pesan error di awal
    errorComment.textContent = "";

    const commentText = commentInput.value.trim();

    // Validasi
    if (commentText === "" || commentText.length < 5) {
        errorComment.textContent = "Komentar harus diisi minimal 5 karakter.";
        return;
    }

    // Buat div komentar baru
    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";

    // Paragraf isi komentar
    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = commentText;

    // Tombol hapus (opsional / lebih lanjut)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";

    deleteButton.addEventListener("click", function () {
        commentList.removeChild(commentItem);
    });

    commentItem.appendChild(commentParagraph);
    commentItem.appendChild(deleteButton);

    // Tambahkan ke commentList
    commentList.appendChild(commentItem);

    // Kosongkan textarea
    commentInput.value = "";
});
