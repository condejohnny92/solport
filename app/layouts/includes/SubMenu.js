"use client"

export default function SubMenu() {

    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Saved' },
        { id: 3, name: 'Solar Panels' },
        { id: 4, name: 'Solar Energy Storage' },
        { id: 5, name: 'Inverters' },
        { id: 6, name: 'Solar Racking' },
        { id: 7, name: 'Monitoring' },
        { id: 8, name: 'Electric Vehicle Charging' },
        { id: 9, name: 'Balance of System' },
        { id: 10, name: 'Solar Tools' },
        { id: 11, name: 'Sell' },
    ]
    return (
        <>
            <div id="SubMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                   <ul
                        id="TopMenuLeft"
                        className="
                            flex
                            items-center
                            text-[13px]
                            text-[#333333]
                            px-2
                            h-8
                        "
                   >
                        {menuItems.map(item => (
                        <li key={item.id} className="px-3 hover:underline cursor-pointer">
                            {item.name}
                        </li>
                        ))}
                   </ul>

                </div>
            </div>
        </>
    )
}