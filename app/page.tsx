import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg">
        
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl text-center">
            Cadastro
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-0">
          <Input placeholder="Nome" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />

          <Button className="w-full">
            Cadastrar
          </Button>
        </CardContent>

      </Card>
      
    </div>
  )
}

export default Home
