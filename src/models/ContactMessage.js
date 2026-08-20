const { pool } = require('../config/db');

class ContactMessage {
  static async create({ name, email, message }) {
    const sql = `
      INSERT INTO contact_messages (name, email, message, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    const [result] = await pool.execute(sql, [name, email, message]);
    return result.insertId;
  }
}

module.exports = ContactMessage;
