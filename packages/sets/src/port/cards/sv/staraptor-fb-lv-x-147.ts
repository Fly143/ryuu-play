import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class StaraptorFBLVX_147 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staraptor FB";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fast Call", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Staraptor FB is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Defog", cost: [], damage: "40", text: "Before doing damage, you may discard any Stadium card in play. If you do, this attack's base damage is 70 instead of 40." }
  ];
  public set: string = "SV";
  public name: string = "Staraptor FB LV.X";
  public fullName: string = "Staraptor FB LV.X SV 147";
  public text: string = "Staraptor FB LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* discardStadium */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
