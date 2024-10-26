document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('id').value;

    // Xác thực dữ liệu
    if (!name || !email || !id) {
        alert('Vui lòng điền tất cả các trường.');
        return;
    }

    addProfile(name, email, id);
    document.getElementById('profile-form').reset(); // Đặt lại form
});

const profiles = [];

function addProfile(name, email, id) {
    const profile = { name, email, id };
    profiles.push(profile);
    renderProfiles();
}

function renderProfiles() {
    const tbody = document.getElementById('profile-table').querySelector('tbody');
    tbody.innerHTML = ''; // Xóa nội dung trước đó

    profiles.forEach((profile, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${profile.name}</td>
            <td>${profile.email}</td>
            <td>${profile.id}</td>
            <td>
                <button onclick="editProfile(${index})">Chỉnh sửa</button>
                <button onclick="deleteProfile(${index})">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editProfile(index) {
    const profile = profiles[index];
    document.getElementById('name').value = profile.name;
    document.getElementById('email').value = profile.email;
    document.getElementById('id').value = profile.id;

    // Xóa hồ sơ cũ
    deleteProfile(index);
}

function deleteProfile(index) {
    profiles.splice(index, 1); // Xóa hồ sơ
    renderProfiles(); // Cập nhật danh sách hồ sơ
}
