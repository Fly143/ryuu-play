import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class TeamMagmaSClaydol_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Baltoy";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magma Switch", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Hand", cost: [], damage: "40+", text: "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Claydol";
  public fullName: string = "Team Magma's Claydol MA 8";
  public text: string = "Team Magma's Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
