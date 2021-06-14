class PollsController < ApplicationController
  before_action :set_poll, only: %i[ show edit update destroy ]

  # GET /polls or /polls.json
  def index
    @polls = Poll.all.limit(10)
    @poll = Poll.new
  end

  # GET /polls/1 or /polls/1.json
  def show
  end

  # GET /polls/new
  def new
    @poll = Poll.new
  end

  # GET /polls/1/edit
  def edit
  end

  # POST /polls or /polls.json
  def create
    @poll = Poll.new(poll_params)

    if @poll.save
      redirect_to polls_path, notice: 'Poll was updated.'
    else
      render :new
    end
  end

  # PATCH/PUT /polls/1 or /polls/1.json
  def update
    if @poll.update(poll_params)
      redirect_to @poll, notice: "Poll was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /polls/1 or /polls/1.json
  def destroy
    @poll.destroy
    redirect_to polls_path, notice: 'Poll was deleted.'
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_poll
    @poll = Poll.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def poll_params
    params.require(:poll).permit(:name, :alcohol)
  end
end
