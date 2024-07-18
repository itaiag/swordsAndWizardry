import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import {monsters} from '../../Data/Monsters'
import './MonsterGrid.css';


export default function MonsterGrid({type} : {type: string}) {


    const navigate = useNavigate();

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, hideable: true },
        { field: 'name', headerName: 'שם', width: 190, align: 'right',renderCell: (params) => (
            <div style={{ padding: '0 15px' }}>{params.value}</div>
          ), },
        { field: 'difficulty', headerName: 'דרגת קושי', width: 120, type: 'number', align: 'center' }

    ];

    function getMonsters() {
        let idCounter = 0;
        let monsterRows: Array<any> = [];
        monsters.forEach(monster => { 
            if (monster['מקור'] === type) {
                monsterRows.push({ id: idCounter++, name: monster.שם, difficulty:monster['דירוג קושי'] })
            }
        });
        return monsterRows;

    }

    const handleRowClick = (monsterName: string) => {
        navigate(`/monster?name=${encodeURIComponent(monsterName)}`);
    };

    return (
        <div className="dataGridContainer" style={{ height: '3900px' }}>
            <DataGrid
                rows={getMonsters()}
                columns={columns}
                initialState={{
                    columns: {
                        columnVisibilityModel: {                            
                            id: false,                            
                        },
                    },
                    pagination: {
                        paginationModel: { page: 0, pageSize: 100 },
                    },
                }}
                pageSizeOptions={[10, 20, 50, 100]}
                onRowClick={(params) => handleRowClick(params.row.name)}
            />
        </div>
    );
}
