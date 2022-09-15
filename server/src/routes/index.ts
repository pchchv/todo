import { addTodo, deleteTodo, getTodos, updateTodo } from "@/controllers";
import { Router } from "express";

const router: Router = Router()
router.get('/todos', getTodos)
router.post('/todo', addTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

export default router