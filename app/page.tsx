import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { CheckCheck, CirclePlus, SquarePen, Trash } from "lucide-react"
import { List, OctagonX  } from 'lucide-react';

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-2">
        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa" className="flex-1" />
          <Button variant="outline" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"><CirclePlus/>Adicionar</Button>
        </div>

        <CardContent>

        <Separator className="mb-4"/>

           <div className="flex gap-2">
             <Badge className="cursor pointer bg-blue-500 text-white" variant="default"><List/>Todas</Badge>
             <Badge className="cursor pointer bg-blue-500 text-white" variant="outline"><OctagonX/>Não finalizadas</Badge>
             <Badge className="cursor pointer bg-blue-500 text-white" variant="outline"><CheckCheck/>Concluídas</Badge>
           </div>

          <div className="mt-4 border-b-1">

            <div className="h-14 flex items-center justify-between border-t-1">
                <div className="w-1 h-full bg-green-300"></div>
                <p className="flex-1 px-2 text-sm">Estudos React</p>
                <div className="flex gap-2 items-center">
                  <SquarePen size={16} className="cursor-pointer text-gray-500 hover:text-gray-700"/>
                  <Trash size={16} className="cursor-pointer text-gray-500 hover:text-gray-700"/>
                </div>
            </div>

            
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default Home
