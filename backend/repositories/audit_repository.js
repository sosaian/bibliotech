const db = require('../config/db');

class AuditRepository
{
    async create(logData)
    {
        const { user_id, action, target, ip_address = null } = logData;

        await db.execute(
            'CALL sp_create_audit_log(?, ?, ?, ?)',
            [user_id, action, String(target), ip_address]
        );

        return true;
    }
}

module.exports = new AuditRepository();