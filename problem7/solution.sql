SELECT distinct t.address
FROM trades t 
INNER JOIN 
(
SELECT 
    address,
    SUM(CASE
        WHEN denom = 'usdc' THEN amount * 0.000001
        WHEN denom = 'swth' THEN amount * 0.00000005
        WHEN denom = 'tmz' THEN amount * 0.003
        ELSE 0
        END
    ) AS balance
FROM balances
GROUP BY address
) b ON 
    t.address = b.address
WHERE t.block_height > 730000 AND b.balance > 500


