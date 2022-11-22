import React from 'react'

export const Table = ({records}) => {
    console.log("inside ",records)
  return (
<div class="overflow-x-auto relative shadow-md sm:rounded-lg m-10">
    <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-gray-700">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600  rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    S.No.
                </th>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    Date
                </th>
                <th scope="col" class="py-3 px-6">
                    Time
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           

                {
                    
                    records.map((record,i)=>{

return <tr class="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900  whitespace-nowrap hover:text-white">
                    {i+1}
                </th>
                <td class="py-4 px-6">
                  {record.name}
                </td>
                <td class="py-4 px-6">
                    {record.id}
                </td>
                <td class="py-4 px-6">
                   {record.email}
                </td>
                <td class="py-4 px-6">
                   {record.date}
                </td>
                <td class="py-4 px-6">
                    {record.time}
                </td>
                <td class="flex items-center py-4 px-6 space-x-3">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>

                    })
                }
          
         
           
        </tbody>
    </table>
</div>
  )
}
