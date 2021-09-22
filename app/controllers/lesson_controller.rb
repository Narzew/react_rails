# frozen_string_literal: true

class LessonController < ApplicationController
  before_action :set_lesson, only: %i[show json_show]

  def index
    @lessons = Lesson.all
  end

  def json_index
    @lessons = Lesson.all
    render json: @lessons
  end

  def show
    @lesson
  end

  def json_show
    render json: @lesson
  end

  private

  def set_lesson
    @lesson = Lesson.find(params[:id])
  end
end
