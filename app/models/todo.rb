class Todo < ApplicationRecord

  def self.pending
    self.where("completed =?", false).order(created_at: :desc)
  end

  def self.completed
    self.where("completed =?", true)
  end
end
