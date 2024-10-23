const pool = require("../db");

const UserModel = {
    getAllUsers: async () => {
        const result = await pool.query("SELECT * FROM Users");
        return result.rows;
    },
    createUser: async (name, email) => {
        const result = await pool.query(
            "INSERT INTO Users (Name, Email) VALUES ($1, $2)",
            [name, email],
        );
        return result.rows[0];
    },
    deleteUser: async (userId) => {
        try {
            const result = await pool.query("DELETE FROM Users WHERE ID = $1", [userId]);
            return result.rows;
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
};

module.exports = UserModel;