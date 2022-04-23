class TodosController < ApplicationController
  before_action :set_todo, only: %i[ show edit update destroy ]

  # GET /todos or /todos.json
  def index
    @todos = Todo.all
  end

  def get_todos
    @todos = Todo.all
    render json: {data: @todos}
  end

  def completed_todos
    @completed = Todo.completed
    render json: {data: @completed}
  end

  def pending_todos
    @pending = Todo.pending
    render json: {data: @pending}
  end

  # GET /todos/1 or /todos/1.json
  def show
  end

  # GET /todos/new
  def new
    @todo = Todo.new
  end

  # GET /todos/1/edit
  def edit
  end

  # POST /todos or /todos.json
  def create
    @todo = Todo.new(todo_params)

    respond_to do |format|
      if @todo.save
        format.html { redirect_to @todo, notice: "Todo was successfully created." }
        format.json { render :show, status: :created, location: @todo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  def create_todo
    todo = Todo.create!(
      body: params['body'],
      completed: params['completed']
    )

    if todo
      render json: {status: :created, data: Todo.all}
    else
      render json: {status: 501}
    end
  end

  # PATCH/PUT /todos/1 or /todos/1.json
  def update
    respond_to do |format|
      if @todo.update(todo_params)
        render json: {data: Todo.all, status: 'updated'}

        # format.html { redirect_to @todo, notice: "Todo was successfully updated." }
        # format.json { render :show, status: :ok, location: @todo }
      else
        # format.html { render :edit, status: :unprocessable_entity }
        # format.json { render json: @todo.errors, status: :unprocessable_entity }
        render json: {status: 'null'}
      end
    end
  end

  # DELETE /todos/1 or /todos/1.json
  def destroy
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_url, notice: "Todo was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:body, :completed)
    end
end
