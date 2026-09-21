const { login } = require("./auth");

test("Login đúng với admin/123", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Login sai mật khẩu", () => {
    expect(login("admin", "999")).toBe(false);
});

test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Password rỗng", () => {
    expect(login("admin", "")).toBe(false);
});

test("Username sai", () => {
    expect(login("user", "123")).toBe(false);
});

test("Password chứa ký tự đặc biệt", () => {
    expect(login("admin", "@@@")).toBe(false);
});

test("Tài khoản bị khóa", () => {
    expect(login("locked", "123")).toBe(false);
});
